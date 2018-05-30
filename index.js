function randomAbjad (row, col) {
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

function checkAllVowelArray (row, col) {
  let randomHuruf = randomAbjad(5, 4)
  
  // for (let a = 0; a < randomHuruf.length; a++) {

  // }
  console.log(randomHuruf)
}
checkAllVowelArray()

// console.log(randomAbjad(5, 4))