import Skill from "../Models/Skill";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  personName: String,
  description: String,
  avatar: String,
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
});

export interface IUser extends mongoose.Document {
  personName: String;
  description: String;
  avatar: String;
  skills: typeof Skill[];
}
const User = mongoose.model<IUser>("User", UserSchema);

export default User;
