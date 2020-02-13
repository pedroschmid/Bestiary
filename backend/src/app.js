import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { BeastRoute } from "./routes/beastRoute";

class App {
  PORT = process.env.PORT || 3000;
  URL =
    "mongodb+srv://root:root@powertrip-zp9uk.mongodb.net/bestiary?retryWrites=true&w=majority";
  beastRoute = new BeastRoute();

  constructor() {
    this.app = express();
    this.middlewares();
    this.database(this.URL);
    this.routes();
    this.server(this.PORT);
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  database() {
    mongoose.connect(this.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  routes() {
    this.beastRoute.routes(this.app);
  }

  server() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on http://localhost:${this.PORT}/`);
    });
  }
}

new App();
