const ipl = {
  /**
   * This function iterate array element and finds no of matches played .
   *@param {Array} arr - Array of element
   * @returns {Object} -json object
   */

  matchesPlayed(arr) {
    let result = []

    arr.forEach((element) => {
      let findSeason = result.find((res) => res.season === element.season)

      if (findSeason) {
        findSeason.match++
      } else {
        let obj = {}
        obj.season = element.season
        obj.match = 1
        result.push(obj)
      }
    })
    return JSON.stringify(result)
  },
  /**
   * This function iterate array element and no of matches won by the team.
   *@param {Array} arr - Array of element
   * @returns {Object} -json object
   */
  matchesWon(arr) {
    let obj = {}

    arr.forEach((element) => {
      let season = element.season

      let winner = element.winner

      if (obj[season] && obj[season][winner]) {
        obj[season][winner]++
      } else if (obj[season]) {
        obj[season][winner] = 1
      } else {
        obj[season] = {}
        obj[season][winner] = 1
      }
    })
    return JSON.stringify(obj)
  },
  /**
   * This function iterate array element and find Extra runs given by the team.
   *@param {Array} matches - Array of element
   *@param {Array} deliveries - Array of element
   * @returns {Object} -json object
   */
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
  /**
   * This function iterate array element and finds top 10 economical bowlers
   *@param {Array} matches - Array of element
   *@param {Array} deliveries - Array of element
   * @returns {Object} -json object
   */
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
