function boardGenerator(row,col) {
  var dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','a','i','i','u','a','a','i','i','u','a','a','i','i','u','a','a','i','i','u'];
  var arrParent = [];

  for (var i = 0; i < row; i++) {
    var newArr = [];
    for (var j = 0; j < col; j++) {
      var randomHuruf = dictionary[Math.floor(Math.random() * dictionary.length)];
      newArr.push(randomHuruf);
    }
    arrParent.push(newArr);
  }
  return arrParent;
}
// console.log(boardGenerator(5,4));
// console.log(boardGenerator(2,4));

function blockCheck() {
  var board = boardGenerator(5,4);
  console.log(board);
  var arr = [];

  for (var i = 0; i < board.length-1; i++) {
    for (var j = 0; j < board.length-2; j++) {
      var string2x2 = '';
      string2x2 += board[i][j] + board[i][j+1] + board[i+1][j] + board[i+1][j+1];
      if (checkVocals(string2x2)) {
        arr.push(string2x2);
      }
    }
  }
  return arr;
}

function checkVocals(string) {
  var hurufVocals = ['a','i','u','e','o','A','I','U','E','O'];
  var newStr = '';

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < hurufVocals.length; j++) {
      if (string[i] === hurufVocals[j]) {
        newStr += string[i];
      }
    }
  }

  if (newStr.length === string.length) {
    return true;
  }else {
    return false;
  }
}


console.log(blockCheck());
