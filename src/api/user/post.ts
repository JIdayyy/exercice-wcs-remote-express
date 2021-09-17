import { userInfo } from "os";
import Skill, { ISkill } from "../../../Models/Skill";
import User, { IUser } from "../../../Models/User";
import { UserHandler } from "./interfaces";

const post: UserHandler["post"] = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  const newSkill = new Skill();
  newSkill.name = body.skills[0].name;
  newSkill.vote = body.skills[0].vote;
  console.log("newSkill", newSkill);
  try {
    const newUser = await User.create({
      personName: body.personeName,
      description: body.description,
      avatar: body.avatar,
    });
    const result = newUser.save().then((result) => {
      console.log("user", result);
      User.findOne(
        { personName: result.personName },
        (err: any, user: IUser) => {
          if (user) {
            console.log("focus", newSkill);
            user.skills.push(newSkill as any);
          }
        }
      );
    });

    res.status(201).json(result);
  } catch (error) {
    next(error);
    return res.status(500).send(error);
  }
};

export default post;
