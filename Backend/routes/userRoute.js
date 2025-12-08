import express from "express"
import { user } from "../controller/userController.js";
import { authenticateToken } from "../middleware/auth.js"

const router = express.Router()

router.get("/", authenticateToken, user)

export default router