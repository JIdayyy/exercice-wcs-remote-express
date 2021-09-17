import { RequestHandler } from "express";
import { ISkill } from "../../../Models/Skill";

export interface SkillHandler {
  getAll: RequestHandler<Record<string, never>, ISkill[] | Error, null>;
}
