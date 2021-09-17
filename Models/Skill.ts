import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface ISkill extends mongoose.Document {
  name: string;
  vote: number;
}

const SkillSchema = new Schema({
  name: String,
  vote: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Skill = mongoose.model<ISkill>("Skill", SkillSchema);

export default Skill;
