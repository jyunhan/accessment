## Description
Use tsc instead of nestJs nor nodejs, the purpose is to perform can handle native ts configuration.
Hope can make 1st edition in 2 days, then move to paper (plan) works, therefore, left part of varialbe __any__ type in purpose.

Please follow steps below to run the accessment backend service.

## Prerequisite
1. yarn
2. npx
3. docker
4. nodejs (suggest LTS)
5. give .env file values

## To install dependency

Install all backend dependencies.
```yarn install```

## Facilities

Run redis cluster through container
```docker compose down && ip=$(ipconfig getifaddr en0) docker-compose up -d```

## Build, then launch!!

Fire Application!!
1. ```npm run build```
2. ```npm start```
