/*
  To check if a 2D array filled with random letters has 2x2 blocks
  filled completely with ONLY Vowels
*/

//Generate 2D Board
function generateBoard (totalRows,totalColumns) {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz';
  const board = [];

  for (let i = 0; i < totalRows; i++) {
    board.push([])
    for (let j = 0; j < totalColumns; j++) {
      board[i].push(dictionary[Math.floor(Math.random()*dictionary.length)]);
    }
  }
  return board;
}

//Check vowels in blocks
function checkVowels (totalRows,totalColumns) {
  const vowels = 'aeiou';
  const board = generateBoard(totalRows,totalColumns);
  let counter = 0;

  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {

      const upperLeft = board[i][j];
      const upperRight = board[i][j+1];
      const lowerLeft = board[i+1][j];
      const lowerRight = board[i+1][j+1];

      if (vowels.indexOf(upperLeft) !== -1 && vowels.indexOf(upperRight) !== -1
       && vowels.indexOf(lowerLeft) !== -1 && vowels.indexOf(lowerRight) !== -1) {
         counter += 1;
       }
    }
  }
  //To check -> console.log(board);
  return counter;
}

console.log(checkVowels(5,4));
//Sample Result
// [ [ 'n', 'u', 'i', 'u' ],
//   [ 'n', 'o', 'e', 'i' ],
//   [ 'm', 'n', 'm', 'b' ],
//   [ 'i', 'a', 'o', 'o' ],
//   [ 'u', 'o', 'o', 'e' ] ]
// Returns 5
