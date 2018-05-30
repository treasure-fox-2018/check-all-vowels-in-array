function generateBoard(row,col){
    var bigArray = []
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<row; i++){
        var smallArray = []
        for(let j=0; j<col; j++){
            let random = alphabet[Math.floor(Math.random() * alphabet.length)]
            smallArray.push(random)
        }
        bigArray.push(smallArray)
    }
    return bigArray
}

function checkAllVowels(input){
    var vowels = "aiueo"
    var result = 0
    for(let i=0; i<input.length-1; i++){
        for(let j=0; j<input[i].length-1; j++){
            var count = 0
            var lookup = `${input[i][j]}${input[i][j+1]}${input[i+1][j]}${input[i+1][j+1]}`
            // console.log(lookup)
            for(let x=0; x<lookup.length; x++){
                for(let z=0; z<vowels.length; z++){
                    if(lookup[x] === vowels[z]){
                        count+=1
                    }
                }
                // console.log(count)
                if(count === lookup.length){
                    result ++
                }
            }
            
        }
    }
    console.log(`${result} block found!`)
    return input
}

var testCheckVowels = [
    ['u', 'e', 'i', 'v'],
    ['a', 'a', 'o', 'y'],
    ['g', 'b', 'i', 'q'],
    ['e', 'i', 'i', 'h'],
    ['z', 'o', 'e', 's'],
  ];
console.log(checkAllVowels(testCheckVowels))
console.log(checkAllVowels(generateBoard(5,4)))