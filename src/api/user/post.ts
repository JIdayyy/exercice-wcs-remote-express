import { prisma } from "../../../prisma/prisma";
import { UserHandler } from "./interfaces";

const post: UserHandler["post"] = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });

    const { password: removedPassword, ...userWithoutPassword } = newUser;

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

export default post;
