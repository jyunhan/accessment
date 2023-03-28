## Description

Here are 2 entries in this accessment
- API server, which supply /api/question in POST method.
- Scheduler, use cron dependency, can run in a seperated application.

## To install dependency

ensure your environment has yarn, then run:
```yarn install```

## Prerequisite

If your local environment has occupied 5432 port, please terminate it.
and run the docker compose to run our simplier postgres via docker.
run:
```docker compose up -d```

## How to application launch in local

steps:
1. ```npm run build```
2. ```npm start```

## How to create scheduler

steps:
1. ```npm run build```
2. ```npm run start:cronjob```
