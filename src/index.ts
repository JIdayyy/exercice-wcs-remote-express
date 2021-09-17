import app from "./app";
import dotenv from "dotenv";
import { mongooseConnect } from "./utils/client";
dotenv.config();

const PORT = process.env.PORT;

mongooseConnect();

app.listen(PORT, () => {
  console.log(`server is runnin on port ${PORT}`);
});
