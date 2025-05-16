resource "aws_s3_bucket" "site_bucket" {
  bucket = "buscador-magic.curso-webdev.com"
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "disable_block" {
  bucket = aws_s3_bucket.site_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.site_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}


resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.site_bucket.id
  depends_on = [aws_s3_bucket_public_access_block.disable_block]

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = "*",
      Action    = "s3:GetObject",
      Resource  = "${aws_s3_bucket.site_bucket.arn}/*"
    }]
  })
}
