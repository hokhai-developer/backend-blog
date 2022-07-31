const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    description: { type: String, maxLength: 600 },
    videoId: { type: String, required: true },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    level: { type: String },
  },
  {
    timestamps: true,
  }
);

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("courses", Course);
