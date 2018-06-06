function randomWords (str, fin) {
  return Math.floor(Math.random() * fin) + str // this will Display between str and fin
}

function generatedBoard (jumRow, jumCol) {
  // var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var alphabet = 'AIUEO'
  var mainArr = []
  for (var a = 0; a < jumRow; a++) {
    var strArr = []
    mainArr.push(strArr)
    for (var b = 0; b < jumCol; b++) {
      var count = randomWords(0, alphabet.length - 1)
      mainArr[a].push(alphabet[count])
    }
  }
  return mainArr
}
// console.log(generatedBoard(5, 4))
function checkAllVowels (str) {
  var vocal = 'aiueoAIUEO'
  var containIdx = []
  for (var a = 0; a < str.length; a++) {
    for (var b = 0; b < vocal.length; b++) {
      if (str[a] === vocal[b]) {
        containIdx.push(b)
      }
    }
  }
  return containIdx.length === str.length
}

function getBlockVowels(arr) {
  var counter = 0
  for (var a = 0; a < arr.length - 1; a++) {
    for (var b = 0; b < arr[a].length - 1; b++) {
      if (checkAllVowels(arr[a][b]) === true) {
        if (checkAllVowels(arr[a][b+1]) === true) {
          if(checkAllVowels(arr[a+1][b]) === true) {
            if (checkAllVowels(arr[a+1][b+1]) === true) {
              counter++
            }
          }
        } 
      }
    }
  }
  return counter
}

var randomArr = generatedBoard(5, 4)
console.log(randomArr)
// console.log(checkAllVowels('AIOU'))
console.log(getBlockVowels(randomArr))