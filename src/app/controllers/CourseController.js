const Courses = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;

    Courses.create(formData)
      .then((course) => res.redirect(`${course.slug}`))
      .catch((error) => res.send("fail"));
  }

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
