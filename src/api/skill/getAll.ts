import Skill from "../../../Models/Skill";
import { SkillHandler } from "./interface";

const getAll: SkillHandler["getAll"] = async (req, res, next) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    next(error);
  }
};

export default getAll;
