import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
});

export interface IUser extends mongoose.Document {
  username: string;
  password?: number;
}
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
