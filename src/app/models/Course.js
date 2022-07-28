const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

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

module.exports = mongoose.model("courses", Course);
