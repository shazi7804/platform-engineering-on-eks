#!/bin/bash

AWS_ACCOUNT="381354187112"
REGION="us-east-1"
ECR_REPO="381354187112.dkr.ecr.us-east-1.amazonaws.com/backstage:latest"

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin ${AWS_ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com

docker buildx build \
    --platform linux/amd64,linux/arm64 \
    --push $ECR_REPO \
    --tag backstage \
