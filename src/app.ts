import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.use(cors())

//parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Fine!')
})

export default app
