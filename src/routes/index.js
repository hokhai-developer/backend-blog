const newRouter = require("./news");
const siteRouter = require("./site");
const meRouter = require("./me");
const CoursesRouter = require("./courses");

function route(app) {
  app.use("/news", newRouter);
  app.use("/courses", CoursesRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
}
module.exports = route;
