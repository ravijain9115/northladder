import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { json, urlencoded } from "body-parser";

import connection from "./db/config";
import productRoutes from "./routes/products";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/products", productRoutes);

app.get("*", (req: express.Request, res: express.Response) => {
    res.status(500).json({ message: "Route Not Found" });
});

connection.sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(port, () => {
  console.log("Server started on port 3000");
});
