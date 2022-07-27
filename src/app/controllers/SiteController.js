const Course = require("../models/Course");

class SiteController {
  //[GET] /
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "ERROR!!!" });
      }
    });
    // Course.find({}, function (error, course) {
    //   if (!error) {
    //     res.json(course);
    //   } else {
    //     res.status(400).json({ error: "error message" });
    //   }
    // });
    // res.render("home");
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
