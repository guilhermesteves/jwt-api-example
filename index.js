import cors from 'cors'
import express from 'express'
import jwt from 'jsonwebtoken'
import expressjwt from 'express-jwt'
import bodyParser from 'body-parser'

import users from './users.js'

const app = express()
const SECRET = 'Sup3rS3cr3t'
const isAuthenticated = expressjwt({ secret: SECRET })

// Configs
app.use(cors())
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)

// Routes
app.get('/', (req, res) => res.status(200).send(`Olá mundo`))

app.get('/public', (req, res) =>
  res.status(200).send('Todo mundo pode ver isso!')
)

app.get('/secret', isAuthenticated, (req, res) =>
  res.status(200).send('Apenas pessoas logadas podem me ver')
)

app.post('/login', (req, res) => {
  const { username, password } = req.body || {}

  if (!username || !password) {
    return res
      .status(400)
      .send('Erro. Digite o nome de usuário e senha corretos')
  }

  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  if (!user) {
    return res.sendStatus(401)
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    SECRET,
    { expiresIn: '1 hour' }
  )

  return res.status(200).send({ access_token: token })
})

app.get('/*', (req, res) => res.sendStatus(404))

// Start server
app.listen(app.get('port'), () =>
  console.log(`Server is running on port ${app.get('port')}.`)
)
