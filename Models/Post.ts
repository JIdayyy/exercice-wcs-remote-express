import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema({
  id: String,
  title: String,
  body: String,
});

export default mongoose.model("Post", Post);
