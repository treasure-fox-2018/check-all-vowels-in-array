function checkVowels(rows, cols){
    let mainArr = []
    let childArr = []
    let vocals = 'AIUEOaiueo'
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWQYZ'
    
    //membuat arr dari string
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < rows; j++){
            childArr.push(alphabet[Math.floor(Math.random()*alphabet.length)])
        }
        mainArr.push(childArr)
        childArr = []
    }

    //fungsi cek vowel
    function check(str){
        for(var i = 0; i < vocals.length; i++){
            if(vocals[i] === str){
                return true
            }
        }
    }
    
    // mengecek vowels tiap blok
   count = 0
   for(var i = 0; i < mainArr.length-1; i++){
        for(var j = 0; j < mainArr[i].length-1; j++){
            if(check(mainArr[i][j]) === true){
                if(check(mainArr[i][j+1]) === true){
                    if(check(mainArr[i+1][j]) === true){
                        if(check(mainArr[i+1][j+1]) === true){
                            count++
                        }
                    }
                }
            }
        }
   }
   return count
}

console.log(checkVowels(2,2));



