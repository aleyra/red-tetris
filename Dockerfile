FROM node:latest

WORKDIR /dev/app

EXPOSE 8000

# faire un script pour exe de daemon
CMD [ "sh", "run_our_script.sh" ]
