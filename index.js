function checkAllVowelsInArray (row, col) {

    var board = []
    var alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var resultCount=0

    for(var i=0; i<row; i++) {
        board.push([])
    }

    for(var x=0; x<row; x++) {
        for(var y=0; y<col; y++) {
            board[x].push(alphabet[(Math.floor(Math.random()*26))])
        }
    }
   
    for(var a=0; a<row-1; a++) {
        for(var b=0; b<col-1; b++) {
            
            if(checkVowel(board[a][b])===true) {
                if(checkVowel(board[a][b+1])===true) {
                    if(checkVowel(board[a+1][b])===true) {
                        if(checkVowel(board[a+1][b+1])===true) {
                            resultCount+=1
                        }
                    }
                }
            }  
                
        } 
                
    }
            
    return resultCount

}

function checkVowel (str) {
    var vowel ='AEIOU'
    var vowelCount=0
    for(var x=0; x<vowel.length; x++) {
        if(str===vowel[x]) {
            vowelCount+=1
        } 
    }
    if(vowelCount>0) {
      return true
    } 
}

console.log(checkAllVowelsInArray(5, 4))
