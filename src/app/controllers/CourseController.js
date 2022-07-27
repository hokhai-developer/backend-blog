const Courses = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    const slug = req.params.slug;
    Courses.findOne({ slug: slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseToObject(course),
        });
      })
      .catch((error) => next(error));
  }
}

module.exports = new CourseController();
