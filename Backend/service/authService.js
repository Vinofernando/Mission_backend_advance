import pool from "../config/db.js"
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from 'uuid'
import { sendEmailVerification } from "./emailService.js"

export const registerUser = async({fullname, username, email, password}) => {
    if(!fullname, !username, !email, !password) throw ({status: 400, message: `All field required`})
    
    const existing = await pool.query(`
        SELECT email FROM users
        WHERE email = $1
    `, [email])

    if(existing.rows.length === 1) throw ({status: 400, message: "Email already register"})

    const hashed  = await bcrypt.hash(password, 10)
    const verifyToken = uuidv4()

    await pool.query(`
        INSERT INTO users (fullname, username, email, password, verify_token)
        VALUES ($1, $2, $3, $4, $5)
    `, [fullname, username, email, hashed, verifyToken])

    await sendEmailVerification(email, verifyToken)

    return  {message : "Your email registred, check your email for verification"}
}