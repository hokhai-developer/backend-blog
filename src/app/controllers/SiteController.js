const Course = require("../models/Course");
const { multipleMongooseToobject } = require("../../util/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) {
    //Callback
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: "ERROR!!!" });
    //   }
    // });

    //Promise
    Course.find({})
      .then((courses) =>
        res.render("home", {
          courses: multipleMongooseToobject(courses),
        })
      )
      .catch((error) => next(error));
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
