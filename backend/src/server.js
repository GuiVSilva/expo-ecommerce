import express from 'express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
import { clerkMiddleware } from '@clerk/express'

const app = express()

app.use(clerkMiddleware())

app.listen(ENV.PORT, () => {
  console.log('Server is running on port 3000'), connectDB()
})
