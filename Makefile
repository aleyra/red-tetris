dev		:
	docker compose up --build

prod	:
	docker compose -f docker-compose.prod.yml up --build

dir_clean:
	$(RM) -R front/node_modules front/build server/node_modules

image_clean:
	docker rmi $$(docker images -a -q)

volume_clean:
	docker volume prune -f

fclean: dir_clean
	-docker stop $$(docker ps -a -q)
	-docker rm $$(docker ps -a -q)
	-docker volume rm $$(docker volume ls -q)
	-docker rmi $$(docker images -a -q)

	docker system prune -f

re	:
	$(MAKE) fclean
	$(MAKE) dev

setup	:
	cp .github/hooks/pre-commit .git/hooks/pre-commit