import pool from "../config/db.js";

export const getMovie = async ({genre, movie, sort}) => {
    let query = `
    SELECT 
        m.movie_title, 
        g.genre_film 
    FROM movie_genre mg 
    JOIN movie m ON mg.movie_id = m.movie_id 
    JOIN genre g ON mg.genre_id = g.genre_id
    `;

    const conditions = [];
    const values = [];

    if(genre){
        values.push(`%${genre}%`)
        conditions.push(`g.genre_film ILIKE $${values.length}`)
    }

    if(movie){
        values.push(`%${movie}%`)
        conditions.push(`m.movie_title ILIKE $${values.length}`)
    }

    if(conditions.length > 0){
        query += ` WHERE ` + conditions.join(' AND ')
    }

    if (sort === "title_asc") {
        query += ` ORDER BY m.movie_title ASC`;
    } else if (sort === "title_desc") {
        query += ` ORDER BY m.movie_title DESC`;
    }

    const result = await pool.query(query, values)
    return result
}