import { User } from ".prisma/client";
import { RequestHandler } from "express";

type UserWithoutPassword = Omit<User, "password">;

interface IUserBodyPost {
  email: string;
  username: string;
  password: string;
}

export interface UserHandler {
  getAll: RequestHandler<
    Record<string, never>,
    UserWithoutPassword[] | Error,
    any
  >;
  post: RequestHandler<
    Record<string, never>,
    UserWithoutPassword | Error,
    IUserBodyPost
  >;
  getOne: RequestHandler<{ id: string }, UserWithoutPassword | Error, any>;
}
