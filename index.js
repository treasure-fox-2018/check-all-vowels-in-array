function vowelArr(jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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
  console.log(mainArr)
  return mainStr
}

console.log(vowelArr(3, 3))