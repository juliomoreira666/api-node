import * as mongoose from "mongoose";
const NewsSchema = new mongoose.Schema({
  hat: { type: String },
  title: { type: String },
  text: { type: String },
  author: { type: String },
  img: { type: String },
  publishDate: { type: Date },
  link: { type: String },
  active: { type: Boolean },
  reg_time: { type: Date, default: Date.now }
});

export default NewsSchema;
