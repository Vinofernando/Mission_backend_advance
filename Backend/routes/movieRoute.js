import express from 'express'
import { getMovie } from "../controller/movieController.js";
 
const router = express.Router()

router.get("/", getMovie)

export default router