import express from 'express'
import { register, login } from '../controller/authController.js'
import { verifyAccount } from '../controller/verifyController.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/verify/:token", verifyAccount)

export default router