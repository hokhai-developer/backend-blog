const Courses = require("../models/Course");
const { multipleMongooseToobject } = require("../../util/mongoose");

class MeController {
  //[GET] /stored/courses
  storedCourses(req, res, next) {
    Courses.find({})
      .then((course) =>
        res.render("me/stored-courses", {
          course: multipleMongooseToobject(course),
        })
      )
      .catch(next);
  }

  //[GET] /trash/courses
  trashCourses(req, res, next) {
    Courses.findDeleted({})
      .then((course) =>
        res.render("me/trash-courses", {
          course: multipleMongooseToobject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
