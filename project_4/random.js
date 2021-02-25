function fetchRandomNumbers() {
  return new Promise((resolve, reject) => {
    console.log('Fetching number...')

    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0

      resolve(randomNum)
    }, (Math.floor(Math.random() * 5) + 1) * 1000)
  })
}

function fetchRandomString(callback) {
  return new Promise((resolve, reject) => {
    console.log('Fetching string...')
    setTimeout(() => {
      let result = ''

      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      let charactersLength = characters.length

      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }

      console.log('Received random string:')

      resolve(result)
    }, (Math.floor(Math.random() * 5) + 1) * 1000)
  })
}


// Task 1

//fetchRandomNumbers().then((res) => console.log(res))
//fetchRandomString().then((res) => console.log(res))

// Task 2
// let sum = 0
// fetchRandomNumbers()
//   .then((res) => {
//     sum += res

//     return fetchRandomNumbers()
//   })
//   .then((res) => {
//     sum += res

//     console.log(sum)
//   })
