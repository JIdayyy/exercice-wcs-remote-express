import Express from "express";
import api from "./api/routes";
const app = Express();

app.use(api);

export default app;
