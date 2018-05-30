var dummyBoard = [['A','X','C','Y'],
                  ['E','O','O','S'],
                  ['I','U','I','N'],
                  ['M','Y','O','E'],
                  ['P','D','A','I']]


function createNestedArray(jumlahRow, jumlahCol){

    let arr = [];
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for( let row = 0; row < jumlahRow; row++){
        arr.push([])
        for(let col = 0; col < jumlahCol; col++){
            let idxRandmAlp = Math.floor(Math.random()*alp.length) 
            arr[row].push(alp[idxRandmAlp])
        }
    }


    return arr
}

function checkAllVowels(str){
    var library = 'AIUEO';

    if(str.length === 0){
        return true;
    }

    for(let a=0; a<=library.length-1; a++){
        if(library[a]===str[0]){
            return checkAllVowels(str.slice(1))
        }
    }
    return false;

}


function checkAllVowelsinArray(board){
    
    let lengthRow = board.length-1
    let lengthCol = board[0].length-1
    let counterTrue = 0;
    for(let row = 0; row < lengthRow; row++){
        
        for(let col = 0; col < lengthCol; col++){
            let arrCheck = []

            for(let i = row ; i <= row+1; i++){
                for(let j = col; j <= col+1; j++){
                    arrCheck.push(board[i][j])
                }
            }
            console.log(arrCheck)
            if(checkAllVowels(arrCheck)){
                counterTrue ++;
            }
        }
    }
    return counterTrue;
}

let board = createNestedArray(4, 4)
console.log(board);
console.log(checkAllVowelsinArray(board))
console.log(checkAllVowelsinArray(dummyBoard))