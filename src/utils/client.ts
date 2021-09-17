import mongoose from "mongoose";

export const mongooseConnect = () => {
  console.log("attempt to connect mongoDB ... ");
  try {
    mongoose.connect("mongodb://localhost:27017/exremote", () => {
      console.log("connected");
    });
  } catch (error) {
    console.log(error);
  }
};
