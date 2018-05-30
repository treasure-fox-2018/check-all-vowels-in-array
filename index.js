function vowelArr(jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let vowel = 'AIUEO'
  let mainArr = []
  let mainStr = []
  let urutan = 0
  for (let a = 0; a < jumlahRow; a++) {
    let fillerArr = []
    mainArr.push(fillerArr)
    for (let b = 0; b < jumlahCol; b++) {
      mainArr[a].push(alphabet[Math.floor((Math.random() * alphabet.length))]) 
    }
  }
  for (let a = 0; a+1 < jumlahRow; a++) {
    for (let b = 0; b+1 < jumlahCol; b++) {
      mainStr += mainArr[a][b] + mainArr[a][b+1] + mainArr[a+1][b] + mainArr[a+1][b+1]
    }
  }
  let count = 0
  let trueCount = 0
  for (let c = mainStr.length-1; c >= 0; c--) {
    for (let d = 0; d < vowel.length; d++) {
      if (mainStr[c] === vowel[d]) {
        count++
      }
      if (c % 4 === 0) {
        if (count === 4) {
          trueCount++
          count = 0
        }
      }
    }
  }
  console.log(mainArr)
  return trueCount
}

console.log(vowelArr(3, 3))