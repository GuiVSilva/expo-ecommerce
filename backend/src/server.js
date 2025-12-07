import express from 'express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from 'inngest/express'

import { inngest, functions } from './config/inngest.js'

const app = express()

app.use(express.json())
app.use(clerkMiddleware())

app.use('/api/inngest', serve({ client: inngest, functions }))

const startServer = async () => {
  await connectDB()

  app.listen(ENV.PORT, () => console.log('Server is running on port 3000'))
}

startServer()
