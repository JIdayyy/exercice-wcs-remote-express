import { UserHandler } from "./interfaces";
import { prisma } from "../../../prisma/prisma";

const getOne: UserHandler["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    const { password, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

export default getOne;
