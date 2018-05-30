function generateBoard(row, col) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let rowArr = [];

  for (let i = 0; i < row; i++) {
    let colArr = [];
    for (let j = 0; j < col; j++) {
      let randomChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      colArr.push(randomChar);
    }
    rowArr.push(colArr);
  }
  return rowArr;
}

function checkVowel(char) {
  char = char.toLowerCase();
  let vowels = 'aeiuo';
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) return true;
  }
  return false;
}

function checkVowels(arr){
  let countVowel = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let row = i;
    let nextRow = i + 1;
    for (let j = 0; j < arr[row].length - 1; j++) {
      let idx = j;
      let nextIdx = j + 1;
      if (checkVowel(arr[row][idx]) &&
          checkVowel(arr[row][nextIdx]) && 
          checkVowel(arr[nextRow][idx]) &&
          checkVowel(arr[nextRow][nextIdx])) {
        countVowel++;
      }
    }
  }
  return countVowel;
}

// Test case with all index are vowels
var board = [ ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O']
            ]
console.log(checkVowels(board));

// Test Case dari soal
var board = [ ['A', 'X', 'C', 'Y'],
              ['E', 'O', 'O', 'S'],
              ['I', 'U', 'I', 'N'],
              ['U', 'U', 'O', 'E'],
              ['E', 'O', 'A', 'I']
            ]
console.log(checkVowels(board));

var board = generateBoard(5, 4);
console.log(checkVowels(board));