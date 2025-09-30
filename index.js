const express = require("express");
const mongoose = require("mongoose");
const { 
    MONGO_USER, 
    MONGO_PASSWORD, 
    MONGO_IP, 
    MONGO_PORT, 
    REDIS_URL, 
    REDIS_PORT, 
    SESSION_SECRET 
} = require("./config/config");

const app = express();
const { createClient } = require('redis');
const connectRedis = require('connect-redis');

const redis = require("redis");
const session = require("express-session");

const cors= require("cors");

// create Redis client (v9 style)


const redisClient =redis.createClient({
  socket: {
    host: process.env.REDIS_HOST ||'redis',
    port: process.env.REDIS_PORT || 6379,
  },
});

redisClient.connect().catch(console.error);
const redisStore = require("connect-redis").default;


const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

app.use(express.json());

const postRoutes = require("./routes/postRoutes");
const usreRouter = require("./routes/userRoutes");
const User = require("./models/userModel");

const connectWRetry = () => {
    mongoose
        .connect(mongoUrl)
        .then(() => {
            console.log("successfully connected to db");
        })
        .catch((e) => {
            console.log("DB connection failed, retrying in 5s...");
            setTimeout(connectWRetry, 5000);
        });
};

const port = process.env.PORT || 3000;
connectWRetry();

app.enable("trust proxy");
app.use(cors({}));
app.use(
  session({
    store: redisStore,
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,    // true if using https
      httpOnly: true,
      maxAge: 120000,
    },
  })
);


app.get("/appv1/", (req, res) => {
    res.send("<h2> hi there!!! shk </h2>");
    console.log("this one")
});

app.use("/appv1/posts", postRoutes);
app.use("/appv1/users", usreRouter);

app.listen(port,"0.0.0.0", () => console.log(`listening on port ${port} http://localhost:${port}`));
