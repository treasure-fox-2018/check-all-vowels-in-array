function generateBoard (jumlahRow, jumlahColumn) {
  var mainBoard = [];
  var dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var arrayHuruf = [];
  var index = 0;

  for (var i = 0; i <= jumlahRow*jumlahColumn - 1; i++) {
    arrayHuruf.push(dictionary.charAt(Math.floor(Math.random()* dictionary.length)))
  }

  for (var i = 0; i <= jumlahRow - 1; i++) {
    var rowBoard = [];
    for (var j = 0; j <= jumlahColumn - 1; j++) {
      rowBoard.push(arrayHuruf[index]);
      index++;
    }
    mainBoard.push(rowBoard);
  }
  return mainBoard
}

console.log(generateBoard(5,4))

var block = 
          [['A', 'X', 'C', 'Y'],
           ['E', 'O', 'O', 'S'],
           ['I', 'U', 'I', 'N'],
           ['M', 'Y', 'O', 'E'],
           ['P', 'D', 'A', 'I']]


function Vowels (str) {
  if (str === 'A' || str === 'I' || str === 'U' || str === 'E' || str === 'O' ) {
    return true;
  }
}

function blockVowels (arr) {
  var modus = 0;
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = 0; j <= arr[i].length - 2; j++) {
      if (Vowels(arr[i][j]) === true) {
        if (Vowels(arr[i][j+1]) === true) {
          if (Vowels(arr[i+1][j]) === true) {
            if (Vowels(arr[i+1][j+1]) === true) {
              modus = modus + 1;
            }
          }
        }
      }
    }
  }
  return modus;
}

console.log(blockVowels(block))