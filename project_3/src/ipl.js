const ipl = {
  matchesPlayed(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i].season]) {
        obj[arr[i].season]++
      } else {
        obj[arr[i].season] = 1
      }
    }
    return JSON.stringify(obj)
  },
  matchesWon(arr) {
    let obj = {}
    for (let index = 0; index < arr.length; index++) {
      let season = arr[index].season
      let winner = arr[index].winner
      if (obj[season] && obj[season][winner]) {
        obj[season][winner]++
      } else if (obj[season]) {
        obj[season][winner] = 1
      } else {
        obj[season] = {}
        obj[season][winner] = 1
      }
    }
    return JSON.stringify(obj)
  },
  extraRuns(matches, deliveries) {
    let result = []

    let match_id = matches
      .filter((el) => el.season === '2016')
      .map((el) => el.id)
    deliveries = deliveries.filter((el) => match_id.includes(el.match_id))

    deliveries.forEach((el) => {
      const findTeam = result.find((teams) => teams.team === el.bowling_team)
      if (findTeam) {
        findTeam.ExtraRuns += Number(el.extra_runs)
      } else {
        let obj = {}
        obj.team = el.bowling_team
        obj.ExtraRuns = Number(el.extra_runs)
        result.push(obj)
      }
    })

    return JSON.stringify(result)
  },
  bowlingEconomy(matches, deliveries) {
    let result = []
    let match_id = matches
      .filter((el) => el.season === '2015')
      .map((el) => el.id)
    deliveries = deliveries.filter((el) => match_id.includes(el.match_id))

    deliveries.forEach((el) => {
      const findBowler = result.find((bowler) => bowler.name === el.bowler)
      if (!findBowler) {
        let obj = {}
        obj.name = el.bowler
        if (!Number(el.wide_runs) || !Number(el.noball_runs)) {
          obj.ball = 1
        } else {
          obj.ball = 0
        }

        obj.run =
          Number(el.batsman_runs) +
          Number(el.wide_runs) +
          Number(el.noball_runs)
        obj.economy = obj.run / (obj.ball / 6)
        result.push(obj)
      } else {
        if (!Number(el.wide_runs) || !Number(el.noball_runs)) {
          findBowler.ball++
        }
        findBowler.run +=
          Number(el.batsman_runs) +
          Number(el.wide_runs) +
          Number(el.noball_runs)
        findBowler.economy = findBowler.run / (findBowler.ball / 6)
      }
    })
    let topBowlers = result.sort(function (a, b) {
      return a.economy - b.economy
    })

    return JSON.stringify(topBowlers.slice(0, 10))
  },
}

module.exports = ipl
