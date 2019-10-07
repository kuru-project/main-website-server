# Kuru Anime (Server)
The back-end of Kuru Anime

## Version
- Rails ~> 6.0.0
- Ruby ~> 2.6.4

## Set-up
You need to have **Docker** and **Docker Compose** installed on your machine to be able to run the following commands.

```
# Open your default terminal and run the following
➜ docker-compose build                              # Builds the project
➜ docker-compose run web rake db:create             # Builds the database
➜ docker-compose up                                 # Starts the server
```

## Installing a new Gem
To install a new gem please edit the `Gemfile` and run the following commands afterwards.
```
# Open your default terminal and run the following
➜ docker-compose down                               # Stops the server
➜ docker-compose run web bundle install             # Run 'bundle install' inside the container
➜ docker-compose up --build                         # Starts and rebuilds the project
```

## Dig Deeper
To find out more about the set-up you can check the [rails guide](https://docs.docker.com/compose/rails/) on Docker's website.
