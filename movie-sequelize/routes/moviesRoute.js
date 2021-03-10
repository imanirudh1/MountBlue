const express = require('express')
const { Movies } = require('../models')

const route = express.Router()

route.get('/', (req, res) => {
  Movies.findAll()
    .then((movie) => {
      if (movie.length > 0) {
        res.status(200).json(movie).end()
      } else {
        res
          .status(404)
          .json({
            message: `Movie not found!!!! :(`,
          })
          .end()
      }
    })
    .catch((err) => {
      console.log(err)

      res
        .status(500)
        .json({
          message: 'Error in Fetching Movies',
        })
        .end()
    })
})

route.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  Movies.findByPk(id)
    .then((movie) => {
      if (movie) {
        res
          .status(200)
          .json({
            movie,
          })
          .end()
      } else {
        res
          .status(404)
          .json({
            message: `Movie with the id ${id} is not found!!!! :(`,
          })
          .end()
      }
    })
    .catch((err) => {
      console.log(err)

      res
        .status(500)
        .json({
          message: 'Error Fetching Movie with id=' + id,
        })
        .end()
    })
})

route.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  Movies.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res
          .status(201)
          .json({
            message: 'Movie was updated successfully.',
          })
          .end()
      } else {
        res
          .status(404)
          .json({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`,
          })
          .end()
      }
    })
    .catch((err) => {
      console.error(err)

      res
        .status(500)
        .json({
          message: 'Error updating Movie with id=' + id,
        })
        .end()
    })
})

route.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  Movies.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res
          .status(200)
          .json({
            message: 'Movie was deleted successfully!',
          })
          .end()
      } else {
        res
          .status(404)
          .json({
            message: `Cannot delete Movie with id=${id}. Movie was not found!`,
          })
          .end()
      }
    })
    .catch((error) => {
      console.log(error)

      res
        .status(500)
        .json({
          message: 'Could not delete Movie with id=' + id,
        })
        .end()
    })
})

route.post('/', (req, res) => {
  if (
    !req.body.Rank ||
    !req.body.Title ||
    !req.body.Runtime ||
    !req.body.Genre ||
    !req.body.Director ||
    !req.body.Actor ||
    !req.body.Year
  ) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const movie = {
    Rank: req.body.Rank,
    Title: req.body.Title,
    Description: req.body.Description || 'NA',
    Runtime: req.body.Runtime,
    Genre: req.body.Genre,
    Rating: req.body.Rating || 0,
    Metascore: req.body.Metascore || 'NA',
    Votes: req.body.Votes || 0,
    Gross_Earning_in_Mil: req.body.Gross_Earning_in_Mil || 'NA',
    Director: req.body.Director,
    Actor: req.body.Actor,
    Year: req.body.Year,
  }

  Movies.create(movie)
    .then((movie) => {
      res
        .status(201)
        .json({
          movie,
        })
        .end()
    })
    .catch((err) => {
      res
        .status(500)
        .json({
          message:
            err.message || 'Some error occurred while creating the Movies.',
        })
        .end()
    })
})

route.delete('/', (req, res) => {
  Movies.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res
        .status(200)
        .send({
          message: `${num} Movies were deleted successfully!`,
        })
        .end()
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || 'Some error occurred while removing all Movies.',
        })
        .end()
    })
})

module.exports = route
