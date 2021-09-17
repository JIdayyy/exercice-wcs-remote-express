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

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export default getOne;
