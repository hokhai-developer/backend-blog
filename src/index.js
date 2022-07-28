const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
//connect to DB
db.connect();
//static files
app.use(express.static(path.join(__dirname, "public")));
// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// HTTP logger
app.use(morgan("combined"));
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
