# Kuru Anime (Server)

We follow a [style guide](https://github.com/airbnb/javascript) so please check it out.

## Prerequisites
- PostgreSQL (12.3)
- Node (14.2.0)

## Basic Commands

```
/* After editing 'prisma/schema.prisma' run the command below to create a migration file */
yarn prisma:migrate save --name "Create User and Post model" --experimental
```

```
/* Run the command below to run the migrations */
yarn prisma:migrate up --experimental
```
