all:
	@echo "Usage:"
	@echo "make compose-up"
	@echo "make compose-down"
	@echo "make compose-ps"

docker-build:
	docker build --no-cache -t nodeweb:app -f Dockerfile .

compose-up:
	make docker-build
	docker-compose -f ./compose/docker-compose.yaml up -d

compose-down:
	docker-compose -f ./compose/docker-compose.yaml down

compose-ps:
	docker-compose -f ./compose/docker-compose.yaml ps