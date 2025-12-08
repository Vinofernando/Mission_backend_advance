import * as userService from "../service/userService.js"

export const user = async (req, res, next) => {
    console.log(req.user)
    try{
        const result = await userService.getUser(req.user.id)
        res.json(result)
    } catch (err) { next(err) }
}