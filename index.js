const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.json({ mssg: 'heelo' })
})

app.get('/api', (req, res) => {
  res.json({
    name: 'dhoni',
    age: 26,
  })
})

app.listen(process.env.PORT || 8080, (req, res) => {
  console.log('running server at', process.env.PORT || 8080)
})
