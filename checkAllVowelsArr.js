function checkVowels(row,col){

  let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let mainBoard = [];
//s
  for ( let i = 0 ; i < row ; i++){
    let rowArr = []
    mainBoard.push(rowArr)

    for (let j = 0 ; j < col ; j++){
      mainBoard[i].push(abjad[(Math.floor(Math.random() * abjad.length))]);
    }
  }
  for (var k = 0 ; k < col[j].length ; k++){
    let tampung =
  }
// return mainBoard

}

function vowel(str) {

  var check = checkVowels(row,col)
  var vokal = 'aiueo'
  var countVok = 0

  for (var i = 0 ; i < vokal.length ; i++) {
    for ( var j = 0 ; j < str.length ; j++){
      if (str[j] === vokal[i]) {
        return true
        countVok++
      }
    }
  }
}
