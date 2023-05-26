import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "9909",
  database: "nBook",
  entities: ["/**/*.entity{.ts,.js}"], // entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: ["/**/migrations/*.js"], // migrations: [__dirname + "/**/migrations/*.js"],
  migrationsTableName: "migrations",
});
