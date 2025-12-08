import * as uploadService from "../service/uploadService.js"

export const uploadFile = async(req, res, next) => {
    try{
        const userId = req.user.id; // Ambil dari JWT
        console.log("User ID:", userId);

        const result = await uploadService.uploadService(req.file, userId)
        res.json(result)
    } catch (err) { next(err)}
}