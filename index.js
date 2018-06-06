function checkVowel(str) {
  let vowel = 'AIUEO'
  let count = 0
  for (let a = 0; a < str.length; a++) {
    for (let b = 0; b < vowel.length; b++) {
      if (str[a] === vowel[b]) {
        count++
      }
    }
  }
  if (count === str.length) {
    return true
  } else {
    return false
  }
}

function vowelArr(jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let vowel = 'AIUEO'
  let mainArr = []
  let mainStr = []
  let trueCount = 0
  for (let a = 0; a < jumlahRow; a++) {
    let fillerArr = []
    mainArr.push(fillerArr)
    for (let b = 0; b < jumlahCol; b++) {
      mainArr[a].push(alphabet[Math.floor((Math.random() * alphabet.length))]) 
    }
  }
  for (let a = 0; a+1 < jumlahRow; a++) {
    for (let b = 0; b+1 < jumlahCol; b++) {
      if (checkVowel(mainArr[a][b]) === true && checkVowel(mainArr[a][b+1]) === true && checkVowel(mainArr[a+1][b]) === true && checkVowel(mainArr[a+1][b+1]) === true) {
        mainStr += mainArr[a][b] + mainArr[a][b+1] + mainArr[a+1][b] + mainArr[a+1][b+1]
        trueCount++
      }
    }
  }
  console.log(mainArr)
  return trueCount
}

console.log(vowelArr(10, 3))