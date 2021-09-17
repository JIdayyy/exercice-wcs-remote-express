import Express from "express";
import api from "./api/routes";
import cors from "cors";
const app = Express();
app.use(cors({ origin: "*" }));
app.use(Express.json());

app.use("/api/v1", api);

export default app;
