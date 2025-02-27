variable "s3_bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "domain" {
  description = "The domain name for CloudFront distribution"
  type        = string
}

variable "hosted_zone_id" {
  description = "The hosted zone ID for the domain"
  type        = string
}

variable "cert_arn" {
  description = "The ARN of the ACM certificate"
  type        = string
}