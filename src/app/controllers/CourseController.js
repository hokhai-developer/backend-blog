const Courses = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { renderSync } = require("node-sass");

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

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    const id = req.params.id;
    Courses.findById(id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    const id = req.params.id;
    const formValue = req.body;
    Courses.updateOne({ _id: id }, formValue)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[PUT] /courses/:id
  destroy(req, res, next) {
    const id = req.params.id;
    Courses.deleteOne({ _id: id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
