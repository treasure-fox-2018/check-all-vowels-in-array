function randomAlpha(row,col){
    var hasil =[]
    var huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<row;i++){
        var tampung =[]
        for(let j=0;j<col;j++){
            var random = huruf[(Math.floor(Math.random() * huruf.length))]
            tampung.push(random)
        }
        hasil.push(tampung)
    }
    var jumlah = 0
    for(let i=0 ;i<hasil.length -1;i++){
        var tampung =[]
        for(let j=0;j<hasil[i].length - 1;j++){
            var box = hasil[i][j] + hasil[i][j+1] + hasil[i+1][j] + hasil[i+1][j+1]        
            if(checkVowel(box)){
                jumlah++
            }
        }
    }
    return jumlah
}
console.log(randomAlpha(4,4))

function checkVowel(input){
    let vocal ='AIUEO'
    let kecil = input.toLowerCase()
    let count =0
    for(let i=0;i<kecil.length;i++){
        for(let j=0;j<vocal.length;j++){
            if(kecil[i] == vocal[j]){
                count++
            }
        }
    }
    if(count == kecil.length){
        return true
    }
        return false
}
// var board = randomAlpha(4,4)
// console.log(board)
// console.log(checkVowel(board))
// var input = [
//     ['A','X','C','Y'],
//     ['E','O','O','S'],
//     ['I','U','I','N'],
//     ['M','Y','O','E'],
//     ['P','D','A','I']
// ]
// console.log(checkVowel(input))
