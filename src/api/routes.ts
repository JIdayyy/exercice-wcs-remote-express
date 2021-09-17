import { Router } from "express";
import user from "./user/routes";
import skill from "./skill/routes";
const router = Router();

router.use("/users", user);
router.use("/skills", skill);
export default router;
