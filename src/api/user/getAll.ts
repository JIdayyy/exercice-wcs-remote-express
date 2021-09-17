import { UserHandler } from "./interfaces";
import User from "../../../Models/User";

const getAll: UserHandler["getAll"] = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(
      users.map((user) => {
        return user;
      })
    );
  } catch (error) {
    next(error);
  }
};

export default getAll;
