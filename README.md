# ROADMAP

* CREATE SIGN-UP, SIGN-IN VIEW WITH NEW SERVER

* MAKE SURE ALL THE DOCKER NETWORKING IS SETUP CORRECTLY
* SERVE PWA FROM GATEWAY 80 HTTP SERVER
* CREATE HOME VIEW WITH NEW SERVER DATA

## UP AND RUNNING:
1. run docker compose:
```$
docker-compose -f dev-simple.yml up
```

2. cd into client application to work on (ie, pwa)
```$
cd pwa && yarn start
```

## DOCKER COMMANDS:
```$
# clear containers
docker rm -f `docker ps -qa`
```
