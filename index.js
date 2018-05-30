function checkVowels(row, col){
  const vowels = 'AIUEOaiueo  ';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var board = [];
  var board2 = [];
  var vowelBLocks = 0;

  for (var i = 0; i < row; i++) {
    var hurufArr = [];
    for (var j = 0; j < col; j++) {
      hurufArr.push(alphabet[Math.floor(Math.random()*alphabet.length)]);
    }
    board.push(hurufArr);
  }

  for (var i = 0; i < board.length; i++) {
    board2.push([]);
    for (var j = 0; j < board[i].length; j++) {
      board2[i].push('cons');
      for (var k = 0; k < vowels.length; k++) {
        if (board[i][j] === vowels[k]) {
          board2[i].splice(j,1,'vowel')
        }
      }
    }
  }

  for (var i = 0; i < board2.length - 1; i++) {
    for (var j = 0; j < board2[i].length - 1; j++) {
      if (board2[i][j] === 'vowel'&& board2[i][j+1] === 'vowel' && board2[i+1][j] ==='vowel' && board2[i+1][j+1] === 'vowel') {
        vowelBLocks += 1;
      }
    }
  }
  return vowelBLocks;
}

console.log(checkVowels(5,4));
