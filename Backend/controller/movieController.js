import * as movieService from "../service/movieService.js"

export const getMovie = async (req, res, next) => {
    try{
        const result = await movieService.getMovie(req.query)
        res.json(result.rows)
    } catch (err){
        next(err)
    }
}