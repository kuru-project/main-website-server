import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  database: process.env.TYPEORM_DATABASE,
  host: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_HOST : process.env.TYPEORM_HOST_PRODUCTION,
  password: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_PASSWORD : process.env.TYPEORM_PASSWORD_PRODUCTION,
  port: Number(process.env.TYPEORM_PORT),
  type: 'postgres',
  username: process.env.TYPEORM_USERNAME,
  synchronize: process.env.NODE_ENV !== 'production',
  entities: [
    `${__dirname}/models/entities/**/*{.ts,.js}`,
  ],
  migrations: [
    `${__dirname}/models/migrations/**/*{.ts,.js}`,
  ],
  cli: {
    entitiesDir: 'src/models/entities',
    migrationsDir: 'src/models/migrations',
  },
};

// NOTE: https://github.com/typeorm/typeorm/issues/4068
export = config;
