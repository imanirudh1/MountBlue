const express = require('express')
const path = require('path')
const app = express()

app.get('/matchesplayed', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/output', 'matchesPlayed.json'))
})

app.get('/extraruns', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/output', 'extraRuns.json'))
})

app.get('/matcheswon', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/output', 'matchesWon.json'))
})

app.use(express.static(path.join(__dirname, '../client')))

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}....`))
