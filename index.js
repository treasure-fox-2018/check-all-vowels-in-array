function randomAbjad(row, col) {
  const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let abjadArr = []

  for (let a = 0; a < row; a++) {
    var isiAbjad = []
    for (let b = 0; b < col; b++) {
      isiAbjad.push(abjad.charAt(Math.floor(Math.random() * abjad.length)))
    }
    abjadArr.push(isiAbjad)
  }

  return abjadArr
}

function vowelArray(row, col) {
  let randomHuruf = randomAbjad(5, 4)
  console.log(randomHuruf)
  var count = 0

  for (var a = 0; a < randomHuruf.length-1; a++) {
    for (var b = 0; b < randomHuruf[a].length-1; b++) {
      if (check(randomHuruf[a][b]) === true) {
        if (check(randomHuruf[a][b+1]) === true) {
          if (check(randomHuruf[a+1][b]) === true) {
            if (check(randomHuruf[a+1][b+1]) === true) {
              count++
            }
          }
        }
      }
    }
  }
  console.log(count)
}
vowelArray()

function check(input) {
  if (input === 'A' || input === 'I' || input === 'U' || input === 'E' || input === 'O') {
    return true
  }
}