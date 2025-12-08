import pool from "../config/db.js"

export const getUser = async (userId) => {
    const result = await pool.query(
        `SELECT * FROM users WHERE user_id = $1` , [userId]
    )
    return result.rows
}