const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const clientPath = path.join(__dirname, 'src', 'client')
const outputFiles = path.join(__dirname, 'src', 'public', 'output')

app.get('/', (req, res) => {
  fs.readFile(clientPath + '/index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404)
      console.error(err)
    } else {
      res.set({
        'Content-Type': 'text/html',
      })
      res.status(200)
      res.send(data)
    }
  })
})

app.get('/:files', (req, res) => {
  let file = req.params.files
  console.log(file)
  const ext = file.split('.')[1]
  console.log(ext)
  let contentType
  switch (ext) {
    case 'js':
      contentType = 'text/javascript'
      break
    case 'css':
      contentType = 'text/css'
      break
    case 'json':
      contentType = 'application/json'
      break
    case 'png':
      contentType = 'image/png'
      break
    case 'jpg':
      contentType = 'image/jpg'
      break
  }
  fs.readFile(clientPath + '/' + file, 'utf8', (err, data) => {
    if (err) {
      res.status(404)
      console.error(err)
    } else {
      res.set({ 'Content-Type': contentType })
      res.status(200)
      res.send(data)
    }
  })
})

app.get('/api/:name', (req, res) => {
  let fileName = req.params.name + '.json'

  fs.readFile(outputFiles + '/' + fileName, 'utf8', (err, data) => {
    if (err) {
      res.status(404)
      console.error(err)
    } else {
      res.set({
        'Content-Type': 'application/json',
      })
      res.status(200)
      res.send(data)
    }
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}....`))
