locals {
    s3_bucket_name = var.s3_bucket_name
    domain         = var.domain
    hosted_zone_id = var.hosted_zone_id
    cert_arn       = var.cert_arn
}

resource "aws_s3_bucket" "main" {
    bucket = local.s3_bucket_name
}

resource "aws_cloudfront_distribution" "main" {
    enabled             = true
    aliases             = [local.domain]
    default_root_object = "index.html"
    is_ipv6_enabled     = true
    wait_for_deployment = true

    default_cache_behavior {
      allowed_methods = ["GET", "HEAD", "OPTIONS"]
      cached_methods = ["GET", "HEAD", "OPTIONS"]
      cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
      target_origin_id = aws_s3_bucket.main.bucket
      viewer_protocol_policy = "redirect-to-https"
    }

    origin {
      domain_name = aws_s3_bucket.main.bucket_regional_domain_name
      origin_access_control_id = aws_cloudfront_origin_access_control.main.id
      origin_id = aws_s3_bucket.main.bucket
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn = local.cert_arn
        minimum_protocol_version = "TLSv1.2_2021"
        ssl_support_method = "sni-only"
    }
}

resource "aws_cloudfront_origin_access_control" "main" {
    name = "s3-cloudfront-oac-robjwilliams-ixpandit"
    origin_access_control_origin_type = "s3"
    signing_behavior = "always"
    signing_protocol = "sigv4"
}

data "aws_iam_policy_document" "cloudfront_oac_access" {
    statement {
        principals {
            type = "Service"
            identifiers = ["cloudfront.amazonaws.com"]
        }
        actions = ["s3:GetObject"]
        resources = ["${aws_s3_bucket.main.arn}/*"]

        condition {
            test = "StringEquals"
            values = [aws_cloudfront_distribution.main.arn]
            variable = "AWS:SourceArn"
        }
    }
}

resource "aws_s3_bucket_policy" "main" {
    bucket = aws_s3_bucket.main.id
    policy = data.aws_iam_policy_document.cloudfront_oac_access.json 
}
