import User, { IUser } from "../../../Models/User";
import { RequestHandler } from "express";
import * as T from ".prisma/client";

const fakeList = [
  {
    avatar: "",
    personName: "Name 1",
    description: "Desc 1",
    skills: [{ name: "Skills 1 A 1" }, { vote: "Vote 1 A 1" }],
  },
  {
    avatar: "",
    personName: "Name 1",
    description: "Desc 1",
    skills: [{ name: "Skills 1 A 1" }, { vote: "Vote 1 A 1" }],
  },
  {
    avatar: "",
    personName: "Name 1",
    description: "Desc 1",
    skills: [{ name: "Skills 1 A 1" }, { vote: "Vote 1 A 1" }],
  },
  {
    avatar: "",
    personName: "Name 1",
    description: "Desc 1",
    skills: [{ name: "Skills 1 A 1" }, { vote: "Vote 1 A 1" }],
  },
  {
    avatar: "",
    personName: "Name 1",
    description: "Desc 1",
    skills: [{ name: "Skills 1 A 1" }, { vote: "Vote 1 A 1" }],
  },
];

export interface UserHandler {
  getAll: RequestHandler<Record<string, never>, IUser[] | Error, any>;
  post: RequestHandler<Record<string, never>, typeof User | any, any>;
  getOne: RequestHandler<{ id: string }, T.User | Error, any>;
}
