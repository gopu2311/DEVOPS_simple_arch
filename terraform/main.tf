# terraform/main.tf
provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source = "./vpc.tf"
}

module "security_groups" {
  source = "./security_groups.tf"
}

module "alb" {
  source = "./alb.tf"
}

module "ecs" {
  source = "./ecs.tf"
}

module "secrets" {
  source = "./secrets.tf"
}
