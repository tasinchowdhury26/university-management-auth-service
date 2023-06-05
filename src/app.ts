import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', usersRouter)

//route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Fine!')
})

export default app
