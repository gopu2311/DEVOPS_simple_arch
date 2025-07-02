aws_region       = "ap-south-1"  # or your chosen region
backend_image    = "gopu2311/fastapi-backend:latest"
frontend_image   = "gopu2311/frontend-app:latest"

secrets = {
  DB_PASSWORD = "example-password"
}
