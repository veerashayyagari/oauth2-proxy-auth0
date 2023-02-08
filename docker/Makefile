cookieSecret := $(shell openssl rand -base64 32 | tr -- '+/' '-_')
all:
	@echo "Usage:"
	@echo "make compose-up"
	@echo "make compose-down"
	@echo "make compose-ps"

.PHONY: docker-build
docker-build:
	docker build --no-cache -t veerash/oauth2-proxy-sample:nodeweb-app -f Dockerfile ../

.PHONY: docker-push
docker-push: docker-build
	docker login
	docker push veerash/oauth2-proxy-sample:nodeweb-app

build-compose-up: docker-push
	docker-compose -f ./docker-compose.yaml up -d

compose-up:	
	docker-compose -f ./docker-compose.yaml up -d

compose-down:
	docker-compose -f ./docker-compose.yaml down

compose-ps:
	docker-compose -f ./docker-compose.yaml ps