resource "aws_secretsmanager_secret" "env_secrets" {
  for_each = var.secrets

  name = each.key
}

resource "aws_secretsmanager_secret_version" "env_secrets_version" {
  for_each      = var.secrets
  secret_id     = aws_secretsmanager_secret.env_secrets[each.key].id
  secret_string = each.value
}
