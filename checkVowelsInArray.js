//fungsi generate random number
let generateBoard = (jumlahRow,jumlahCol) => {
  let dictChar = 'AIUEOAIUEOBCDFG'; //craete dictionary with many vowel
  dictChar = dictChar.split("");
  let output = [];
  for (let i = 0 ; i < jumlahRow ; i++) {
    let temp = [];
    for (let j = 0 ; j < jumlahCol ; j++) {
      let randomChar = dictChar[Math.floor(Math.random()*(dictChar.length-1))]  //note random disini kemungkinkan berulang
      temp.push(randomChar)
    }
    output.push(temp);
  }
  return output;
}
//fungsi check if a char is vocal or not
let isCharVocal = (char) => {
  let dictVocal = 'AIUEO';
  for (let i = 0 ; i < dictVocal.length ; i++) {
    if (char === dictVocal[i]) {
      return true;
    }
  }
  return false;
}

//fungsi checkVowel
let checkVowel = (board) => {
  let sumVowelBlock = 0;
  for (let i = 0 ; i < board.length ; i++) {
    for (let j = 0 ; j < board[i].length ; j++) {
      if (isCharVocal(board[i][j])) {
        if (board[i][j+1] !== undefined && isCharVocal(board[i][j+1])) {
          if (board[i+1] !== undefined && isCharVocal(board[i+1][j])) {
            if (board[i+1] !== undefined && isCharVocal(board[i+1][j+1])) {
              sumVowelBlock++;
            }
          }
        }
      }
    }
  }
  return sumVowelBlock;
}

let randomBoard = generateBoard(4,3);
console.log("generatedBoard",randomBoard)
console.log("sumBlockVowels",checkVowel(randomBoard));

randomBoard = generateBoard(4,4);
console.log("generatedBoard",randomBoard)
console.log("sumBlockVowels",checkVowel(randomBoard));
