import express from 'express'
import authRoute from './routes/authRoute.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoute)

app.use(errorHandler)

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
})

