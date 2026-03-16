import { Router } from "express";
import userRoutes from "./user.routes.ts";
import authRoutes from "./auth.routes.ts";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
