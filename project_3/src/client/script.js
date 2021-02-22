fetch('/api/matchesPlayed')
  .then((res) => res.json())
  .then((data) => {
    const season = Object.keys(data)

    const matches = Object.values(data)

    Highcharts.chart('container', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Number of matches played per year for all the years in IPL',
      },
      xAxis: {
        categories: season,
      },
      yAxis: {
        title: {
          text: 'No. of Matches',
        },
      },
      series: [
        {
          data: matches,
        },
      ],
    })
  })

fetch('/api/extraRuns')
  .then((res) => res.json())
  .then((data) => {
    const team = data.map((el) => el.team)
    const extraRuns = data.map((el) => el.ExtraRuns)

    Highcharts.chart('extrarun', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Extra runs conceded per team in the year 2016',
      },
      xAxis: {
        categories: team,
      },
      yAxis: {
        title: {
          text: 'Extra Runs',
        },
      },
      series: [
        {
          data: extraRuns,
        },
      ],
    })
  })

fetch('/api/matchesWon')
  .then((res) => res.json())
  .then((data) => {
    const season = Object.keys(data)
    const match = Object.values(data)

    const result = []

    let count = 0

    match.forEach((el) => {
      const teams = Object.keys(el)
      teams.forEach((team) => {
        if (team) {
          const findTeam = result.find((t) => t.name === team)
          if (findTeam) {
            findTeam.data[count] = el[team]
          } else {
            let obj = {}
            obj.name = team
            obj.data = Array(season.length).fill('')
            obj.data[count] = el[team]

            result.push(obj)
          }
        }
      })
      count++
    })

    const teams = [...result]

    Highcharts.chart('matcheswon', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Number of matches won per team per year in IPL',
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: season,
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'No. of Matches',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
        },
      },
      tooltip: {
        valueSuffix: ' won',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: teams,
    })
  })

fetch('/api/bowlingEconomy')
  .then((res) => res.json())
  .then((data) => {
    const players = data.map((el) => ({
      name: el.name,
      low: Number(el.economy.toFixed(2)),
    }))

    Highcharts.chart('bowlingeconomy', {
      chart: {
        type: 'lollipop',
      },

      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. {xDescription}, {point.y}.',
        },
      },

      legend: {
        enabled: false,
      },

      subtitle: {
        text: '2015',
      },

      title: {
        text: 'Top 10 Economical Bowlers',
      },

      tooltip: {
        shared: true,
      },

      xAxis: {
        type: 'category',
      },

      yAxis: {
        title: {
          text: 'Economy',
        },
      },

      series: [
        {
          name: 'Economy',
          data: players,
        },
      ],
    })
  })
