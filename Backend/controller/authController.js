import * as authService from '../service/authService.js'

export const register = async (req, res, next) => {
    console.log(req.body)
    try{
        const result = await authService.registerUser(req.body)
        res.json(result)
    } catch (err){
        next(err)
    }
}
