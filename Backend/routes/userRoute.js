import express from "express"
import { user } from "../controller/userController.js";
import { authenticateToken } from "../middleware/auth.js"
import { uploadFile } from "../controller/uploadController.js";
import { upload } from "../utility/uploadFileHandler.js";

const router = express.Router()

router.get("/", authenticateToken, user)
router.post("/upload",authenticateToken, upload.single('image'), uploadFile)

export default router