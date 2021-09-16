import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
});

export interface IUser {
  username: string;
  password?: string;
}
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
