## Description
Use tsc instead of nestJs nor nodejs, the purpose is to perform can handle native ts configuration.
Hope can make 1st edition in 2 days, then move to paper (plan) works, therefore, left part of varialbe __any__ type in purpose.

Please follow steps below to run the accessment backend service.

## Prerequisite
1. yarn
2. npx
3. docker
4. nodejs (suggest LTS)
5. create .env file and set up values

## To install dependency

Install all backend dependencies.
```yarn install```

## Facilities

Run redis cluster through container, the ip set from promt to bring local ip into process  
```docker compose down && ip=$(ipconfig getifaddr en0) docker-compose up -d```

## Build, then launch!!

Fire Application!!
1. ```npm run build```
2. ```npm start```

## Test

Use Jest, test env has created and mandatory attributes have values
```npm run test```
