const express = require('express')
const fs = require('fs')
const path = require('path')
const db = require('./models')
const { Movies } = require('./models')
const moviesRoute = require('./routes/moviesRoute')
const app = express()
app.use(express.json())

app.get('/insertdata', (req, res) => {
  fs.readFile(
    path.join(__dirname, 'data', 'movies.json'),
    'utf-8',
    (err, data) => {
      if (err) {
        console.error(err)

        res.status(404).json({
          error: 'File Not Found :(',
        })
      } else {
        console.log(data)
        Movies.bulkCreate(JSON.parse(data)).catch((err) => {
          console.log(err)
        })
        res
          .status(201)
          .json({
            message: ' Data Insertion Completed!!! ;)',
          })
          .end()
      }
    }
  )
})

app.use('/movies', moviesRoute)

app.use((req, res) => {
  res.status(500)
  res
    .json({
      error: {
        message: 'Page Not Found',
      },
    })
    .end()
})

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log('Server Running...')
  })
})
