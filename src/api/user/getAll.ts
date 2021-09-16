import { UserHandler } from "./interfaces";
import { prisma } from "../../../prisma/prisma";

const getAll: UserHandler["getAll"] = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(
      users.map((user) => {
        const { password, ...rest } = user;
        return rest;
      })
    );
  } catch (error) {
    next(error);
  }
};

export default getAll;
