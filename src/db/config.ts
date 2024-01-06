import { Sequelize } from "sequelize-typescript";
import { Products } from "../models/products";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "password",
  database: "northladder",
  logging: false,
  models: [Products],
});

export default connection;