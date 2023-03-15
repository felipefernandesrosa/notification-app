# notification-app

## Start Docker

Run `docker-compose up -d` on root folder of project. It will create a database and
user password.

## Start Node
 - Run `yarn/node install`
 - Configure `.env` with following configs: 

```dotenv
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=DOp8AsB1oqyxgzwpv1MYxT-3WPkJdwvA
DRIVE_DISK=local

#database
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5433
PG_USER=postgres
PG_PASSWORD=postgres
PG_DB_NAME=postgres

```
- Run `node ace serve --watch`

## Migrations and Seeder
- Run `node ace migration:run` to migrate database tables
- After running migrations, run client seed with `node ace db:seed`

## Postman Collection
https://www.postman.com/felipefernandsrosa/workspace/public-ws/collection/5159025-c24efdf2-456e-489f-b5e5-adb3fe93fc57?ctx=documentation
