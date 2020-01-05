# Kuru Anime (Server)
The back-end of Kuru Anime

## Version
- Rails ~> 6.0.0
- Ruby ~> 2.6.4

## Core Gems
- [Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth) (Authentication)

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/BosEriko"><img src="https://github.com/boseriko.png?size=200" width="80px;" alt="Bos Eriko Reyes"/><br /><sub><b>Bos Eriko Reyes</b></sub></a><br /><a href="https://github.com/kuru-project/main-website-server/commits?author=BosEriko" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lyc4n"><img src="https://github.com/lyc4n.png?size=200" width="80px;" alt="Norly Canarias"/><br /><sub><b>Norly Canarias</b></sub></a><br /><a href="https://github.com/kuru-project/main-website-server/commits?author=lyc4n" title="Code">💻</a></td>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->
