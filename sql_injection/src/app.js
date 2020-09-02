const express = require("express");
const path = require("path");
const db = require("./database");
const login = require("./login");

class App {
  constructor() {
    this.express = express();
    this.express.use(express.static(path.join(__dirname, "public")));
    this.express.set("views", path.join(__dirname, "public"));
    this.express.engine("html", require("ejs").renderFile);
    this.express.set("view engine", "html");
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
      
    this.express.use("/index", (req, res) => {
      res.render("index.html");
    });

    this.express.use("/login", login);

    this.express.use((error, req, res, next) => {
      console.log(error);
      let status = 500;
      status = error.statusCode;
      const message = error.message;
      res.status(status).json({ message });
    });
  }
}

module.exports = new App().express;
