import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const port = 3000

const prisma = new PrismaClient()

const router = express.Router()

router.get('/', async (_, res) => {
  const data = {
    name: 'new_name',
    age: 13
  }

  const user = await prisma.user.create({ data })

  return res.status(201).json({ user, message: 'created' })
})

router.get('/all', async (_, res) => {
  const data = await prisma.user.findMany()

  return res.status(200).json({ data })
})

app.use('/', router)

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})
