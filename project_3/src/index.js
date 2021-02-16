const fs = require('fs')
const ipl = require('./ipl')

const csv = require('csvtojson')
let matchesCsv
let deliveriesCsv
csv()
  .fromFile('../data/matches.csv')
  .then((jsonObj) => {
    matchesCsv = jsonObj
    csv()
      .fromFile('../data/deliveries.csv')
      .then((jsonObj) => {
        deliveriesCsv = jsonObj

        const matchesPlayed = ipl.matchesPlayed(matchesCsv)
        fs.writeFile(
          '../public/output/matchesPlayed.json',
          matchesPlayed,
          (err) => {
            if (err) throw err
            console.log('Matches Played file has been saved!')
          }
        )

        const matchesWon = ipl.matchesWon(matchesCsv)
        fs.writeFile('../public/output/matchesWon.json', matchesWon, (err) => {
          if (err) throw err
          console.log('Matches Won By teams file has been saved!')
        })

        const extraRun = ipl.extraRuns(matchesCsv, deliveriesCsv)
        fs.writeFile('../public/output/extraRuns.json', extraRun, (err) => {
          if (err) throw err
          console.log('Extra Runs By teams file has been saved!')
        })
        const bowlingEco = ipl.bowlingEconomy(matchesCsv, deliveriesCsv)

        fs.writeFile(
          '../public/output/bowlingEconomy.json',
          bowlingEco,
          (err) => {
            if (err) throw err
            console.log('Top 10 Economy Bowlers in 2015 file has been saved!')
          }
        )
      })
  })
