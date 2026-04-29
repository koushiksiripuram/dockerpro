# 🐳 Dockerized Web Application

## 📌 Overview
This project demonstrates containerizing a web application using Docker to ensure consistent and portable deployment across different environments. It showcases how applications and their dependencies can be packaged into a container and run reliably anywhere.

---

## 🛠 Tech Stack
- Docker
- Docker Compose
- Node.js
- Express
- Linux

---

## ⚙️ Features
- Containerized application deployment  
- Consistent runtime across environments  
- Lightweight and isolated execution  
- Easy setup using Docker and Docker Compose  
- Port mapping for external access  

---

## 🏗 Project Structure
dockerpro/
├── app/
│   ├── app.js
│   ├── package.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md

---

## 🧪 How It Works
1. Application is written using Node.js  
2. Dockerfile defines the runtime environment and dependencies  
3. Docker builds an image containing the application  
4. Container runs the application independently  
5. Docker Compose simplifies running the application  

---

## ▶️ Getting Started

### Prerequisites
- Docker installed  
- Docker Compose installed  

---

### Run using Docker

docker build -t docker-app .  
docker run -p 3000:3000 docker-app  

---

### Run using Docker Compose

docker-compose up --build  

---

## 🌐 Access Application
http://localhost:3000  

---

## 🔍 Verify Running Containers

docker ps  

---

## 🛑 Stop Container

docker stop <container_id>  

---

## 📌 Key Concepts Demonstrated
- Containerization  
- Docker image creation  
- Container lifecycle  
- Port mapping  
- Environment isolation  

---

## 📊 Real-World Relevance
Docker is widely used in modern DevOps workflows to ensure applications run consistently across development, testing, and production environments.

---

## 🚀 Future Improvements
- Add Kubernetes deployment  
- Integrate CI/CD pipeline  
- Push image to Docker Hub  
- Add environment variable support  

---

## 👨‍💻 Author
Koushik Siripuram  
https://github.com/koushiksiripuram
