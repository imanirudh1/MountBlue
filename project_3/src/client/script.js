fetch('http://localhost:3000/matchesplayed')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const season = Object.keys(data)
    const matches = Object.values(data)
    const chart = Highcharts.chart('container', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Matches Played',
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

fetch('http://localhost:3000/extraruns')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const team = data.map((el) => el.team)
    const extraRuns = data.map((el) => el.ExtraRuns)
    const chart = Highcharts.chart('extrarun', {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Teams Given Extra Runs',
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
fetch('http://localhost:3000/matcheswon')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
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
    console.log(teams)

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
