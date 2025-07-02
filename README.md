# 🚀 DevOps Full Stack Assignment

This project is a complete DevOps-ready full-stack application built with **FastAPI** (backend) and **Next.js** (frontend). It features containerization with **Docker**, CI/CD via **GitHub Actions**, and infrastructure deployment using **Terraform** on **AWS ECS (Fargate)**.

---

## 📁 Project Structure

```
.
├── backend/                 # FastAPI backend
├── frontend/                # Next.js frontend
├── terraform/               # Infrastructure as Code
├── .github/workflows/       # GitHub Actions CI/CD
├── docker-compose.yml       # Local development (optional)
```

---

## ⚙️ Tech Stack

- 🐍 FastAPI
- ⚛️ Next.js (React)
- 🐳 Docker & Docker Compose
- ✅ GitHub Actions (CI/CD)
- 🧪 Pytest & Jest (Testing)
- ☁️ AWS ECS Fargate, ALB, Secrets Manager
- 🔧 Terraform (IaC)

---

## ✨ Features

- API with FastAPI + UI with Next.js
- Unit testing for both frontend & backend
- CI/CD with GitHub Actions:
  - **Push to `develop`**: Run tests, build & push Docker images to Docker Hub
  - **Push to `main`**: Trigger deployment to AWS ECS
- Infrastructure provisioning using Terraform:
  - VPC, subnets, security groups
  - ECS Fargate services + ALB
  - Secrets via AWS Secrets Manager

---

## 🧪 Run Tests Locally

**Backend**
```bash
cd backend
pytest
```

**Frontend**
```bash
cd frontend
npm install
npm test
```

---

## 🐳 Docker (Local Development)

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:8000

---

## 🔄 GitHub Actions CI/CD

| Branch     | Action                                  |
|------------|------------------------------------------|
| `develop`  | Run tests + Docker build + push to Docker Hub |
| `main`     | Deploy to AWS ECS using Terraform        |

---

## ☁️ Terraform Deployment

```bash
cd terraform
terraform init
terraform apply
```

You must provide:
- Docker image URLs for `backend_image` and `frontend_image`
- AWS credentials
- Secrets like `NEXT_PUBLIC_API_URL`


---

## 📦 Docker Images

- **Backend**: `docker.io/gopu2311/fastapi-backend`
- **Frontend**: `docker.io/gopu2311/frontend-app`

---

## 👨‍💻 Author

**Gopendra Rajput**  
DevOps Enthusiast | Ahmedabad, India  
🔗 [LinkedIn](https://www.linkedin.com/in/gopendra-rajput-663689345/)

---

## 📄 License

This project is licensed under the **MIT License**.
