const Course = require("../models/Course");

class SiteController {
  //[GET] /
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: "ERROR!!!" });
    //   }
    // });
    Course.find({})
      .then((courses) => res.json(courses))
      .catch((error) => next(error));
    // res.render("home");
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
