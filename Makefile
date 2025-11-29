init: docker-down-clear docker-pull docker-build docker-up api-init frontend-init
up: docker-up
down: docker-down
restart: down up
lint: pint

docker-up:
	docker compose up -d

docker-down:
	docker compose down --remove-orphans

docker-down-clear:
	docker compose down -v --remove-orphans

docker-pull:
	docker compose pull

docker-build:
	docker compose build

api-init: api-composer-install

api-composer-install:
	docker compose run --rm api-php-cli composer install

pint:
	docker compose run --rm api-php-cli ./vendor/bin/pint --parallel --max-processes=4

frontend-init: frontend-install

frontend-install:
	docker compose run --rm frontend-node-cli npm install

frontend-dev:
	docker compose run --rm frontend-node-cli npm run dev

frontend-build:
	docker compose run --rm frontend-node-cli npm run build
