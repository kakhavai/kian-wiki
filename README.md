# kian_wiki app

### Run the app in terminal

1. Start a Postgres database server on your machine or in the cloud.
2. Set the following environment variables in your .env file

```
POSTGRES_HOST=<address-where-database-running>
POSTGRES_PORT=<port-where-database-running>
POSTGRES_DB=<database-name>
POSTGRES_USER=<username-for-database>
POSTGRES_PASSWORD=<password-to-database>
DB_DIALECT=postgres
```

3. Install packages and start the application server.

```
$ npm install
$ npm start
```

### Run the app inside a Docker container

Build the docker container and get it up and running.

```
$ docker-compose -f docker-compose-local.yml build
$ docker-compose -f docker-compose-local.yml up
```

### Make API calls against the server

1. Go to [http://localhost:8000/swagger](http://localhost:8000/swagger) to see Swagger documentation for API endpoints.
2. Run the APIs by clicking the "Try it now" button on the Swagger page.

### Run admin bro dashboard

Go to [http://localhost:8000/admin](http://localhost:8000/admin)

### Run tests and check code coverage

```
$ npm test
$ npm coverage
```

### Lint your code

```
$ npm lint
$ npm format
```



### Helpful misc commands

```
$ docker kill $(docker ps -q)
$ docker rm $(docker ps -a -q)
$ docker rmi $(docker images -q)
$ docker compose --env-file .env up
$ echo %CR_PAT% | docker login ghcr.io -u ${{ github.actor }} --password-stdin 
$ docker pull ghcr.io/kakhavai/kian-wiki-database
$ docker pull ghcr.io/kakhavai/kian-wiki-nginx
$ docker pull ghcr.io/kakhavai/kian-wiki-nodeserver
$ POSTGRES_HOST=localhost
$ docker-compose -f docker-compose-local.yml up
$ wsl --shutdown
```

