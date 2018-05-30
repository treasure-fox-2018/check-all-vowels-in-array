function randomWords (str, fin) {
  return Math.floor(Math.random() * fin) + str // this will Display between str and fin
}

function generatedBoard (jumRow, jumCol) {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // var alphabet = 'AIUEO'
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

// function checkAllVowels(str) {
//   var vocals = 'aiueo'
//   var idxArr = []
//   var counter = 0
//   // console.log()
  
//   for (var a = 0; a < str.length; a++) {
//     for (var b = 0; b < vocals.length; b++) {
//       if (str[a].toLowerCase() === vocals[b]) {
//         idxArr.push(b)
//       }
//     }
//   }
//   if (idxArr.length === str.length) {
//     return counter++
//   } else {
//     return counter++
//   }
// }

function getBlockVowels(arr) {
  var vocals = 'aiueoAIUEO'
  var counter = 0
  for (var a = 0; a < arr.length - 1; a++) {
    for (var b = 0; b < arr[a].length - 1; b++) {
      // for(var i = 0; i < vocals.length; i++) {
        if (vocals.indexOf(arr[a][b]) >= 0) {
          if (vocals.indexOf(arr[a][b+1]) >= 0) {
            if(vocals.indexOf(arr[a+1][b]) >= 0) {
              if (vocals.indexOf(arr[a+1][b+1]) >= 0) {
                counter++
              }
            }
          } 
        }
      // }
    }
  }
  return counter
}

var randomArr = generatedBoard(5, 4)
console.log(randomArr)
// console.log(checkAllVowels('AIOU'))
console.log(getBlockVowels(randomArr))