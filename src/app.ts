import Express from "express";
import api from "./api/routes";
const app = Express();

app.use(Express.json());

app.use("/api/v1", api);

export default app;
