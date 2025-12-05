import pool from "../config/db.js"

export const verifyAccount = async (req, res, next) => {
    try{
        const { token } = req.params
        const result = await pool.query(`
            SELECT verify_token FROM users
            WHERE verify_token = $1
        `, [token])

        if(result.rows.length === 0) throw ({status: 400, message: "Token invalid"})

        await pool.query(`
            UPDATE users set is_verified = true, verify_token = NULL
            WHERE verify_token = $1
        `, [token])
        res.json({message: "Verification success"})
    } catch (err) { next(err) }
}