function randomBoard(jumlahRow,jumlahCol){
  var arrMain=[]
  var abjad = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(let i = 0; i<jumlahRow; i++){
    let arrRow=[]
    arrMain.push(arrRow)
    for(let j = 0; j<jumlahCol; j++){
      let random = Math.random()*(abjad.length-1)
      let randomAbjad = abjad[Math.round(random)]
      if(arrRow.length !== jumlahCol){
        arrRow.push(randomAbjad)
      }
    }
  }
  return arrMain
}

function checkBlock(jumlahRow,jumlahCol){
   var mainBoard = randomBoard(jumlahRow,jumlahCol)
   // var mainBoard = [['A','X','C','Y'],['E','O','O','S'],['I','U','I','N'],['M','Y','O','E'],['P','D','A','I']]
   var vokal = "aiueoAIUEO"
   var validBlock=0
   console.log(mainBoard)
   for(let i = 0; i<mainBoard.length-1; i++){
     for(let j = 0; j<mainBoard[i].length-1; j++ ){
       let current =mainBoard[i][j]
       let right = mainBoard[i][j+1]
       let bottom = mainBoard[i+1][j]
       let bottomRight = mainBoard[i+1][j+1]
        if(isVowel(current) && isVowel(right) && isVowel(bottom) && isVowel(bottomRight)){
          validBlock++
        }
     }
   }
   return validBlock
}

// separation of concern
function isVowel(letter){
  var vowel = "aiueoAIUEO"
  var validVowel = 0

  for(var j = 0; j<vowel.length; j++){
    if(letter === vowel[j]){
      validVowel++
    }
  }
  return validVowel > 0
}


console.log(checkBlock(5,4))
