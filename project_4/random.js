function fetchRandomNumbers() {
  return new Promise((resolve, reject) => {
    console.log('Fetching number...')

    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0

      resolve(randomNum)
      console.log('Received random number:', randomNum)
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

      resolve(result)
      console.log('Received random string:', result)
    }, (Math.floor(Math.random() * 5) + 1) * 1000)
  })
}

// Task 1

fetchRandomNumbers().then((res) => console.log(res))
fetchRandomString().then((res) => console.log(res))

// Task 2

let sum = 0
fetchRandomNumbers()
  .then((res) => {
    sum += res

    return fetchRandomNumbers()
  })
  .then((res) => {
    sum += res

    console.log(sum)
  })
  .catch((err) => console.log(err))

// Task 3

let str = ''
fetchRandomNumbers()
  .then((res) => {
    str += res

    return fetchRandomString()
  })
  .then((res) => {
    str += res

    console.log('Concatenated string ', str)
  })
  .catch((err) => console.log(err))

// Task 4

Promise.all([
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
  fetchRandomNumbers(),
])
  .then((res) => {
    console.log(res)

    let sum = res.reduce((acc, curr) => acc + curr, 0)

    console.log(sum)
  })
  .catch((err) => console.log(err))
