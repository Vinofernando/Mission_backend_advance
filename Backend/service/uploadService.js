import pool from "../config/db.js"

export const uploadService = async (fileReq, userId) => {
    if(!fileReq) throw ({status: 400, message: "Tidak ada file yang diinput"})
    if(!userId) throw ({status:400, message: "User tidak ditemukan"}) 

    const imageFileName = fileReq.filename
    const pathImageFile = `/uploads/${imageFileName}`

    await pool.query(
        `UPDATE users SET profile = $1 WHERE user_id = $2`
    , [imageFileName, userId])
    return({
        pesan: "Image berhasil diuploads",
        image: pathImageFile
    })
}