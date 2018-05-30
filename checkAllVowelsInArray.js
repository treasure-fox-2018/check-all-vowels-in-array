function generateBoard(jumlahRow, jumlahCol){
  const huruf = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  let motherBoard = [];
  for (let i = 0; i < jumlahRow; i++){
    let row = [];
    for (let i = 0; i < jumlahCol; i++){
      let indexRandom = Math.ceil(Math.random() * huruf.length)
      row.push(huruf[indexRandom]);
    }
    motherBoard.push(row);
    }
  debugger;
  return motherBoard;
}

function checkAllVowels(str){
  var strLower = str.toLowerCase()
  var anyConsonantYet = false
  for (var i in str){
    if (strLower[i] !== 'a' && strLower[i] !== 'i' && strLower[i] !== 'u' && strLower[i] !== 'e' && strLower[i] !== 'o'){
      anyConsonantYet = true
    }
    debugger;
  }

  if (anyConsonantYet) return false;
  return true;
}

function checkAllVowelsInArray (array){
  var allBlock = []
    for (var i = 0; i < array.length - 1; i++){
      for (var j = 0; j < array[0].length - 1; j++){
        var block = []
        block.push(array[i][j])
        block.push(array[i][j+1])
        block.push(array[i+1][j])
        block.push(array[i+1][j+1])
        allBlock.push(block)
      }
    }
    debugger;

  var blockVowel = []
  for (var k in allBlock){
    var strBlock = ''
    for (var l in allBlock[k]){
      strBlock += allBlock[k][l]
    }
    if (checkAllVowels(strBlock)) {
      blockVowel.push([strBlock])
    }
  }
  return blockVowel
}


  console.log(checkAllVowelsInArray ([
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
    ]))
