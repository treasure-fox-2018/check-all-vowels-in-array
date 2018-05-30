const vowelChecker = (row, column) => {
    let board = [];
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let vowels = 'AIUEO';
    let countChecker = 0;
    for(let z  = 0; z < row; z++){
        let arrOfLetter = [];
        for(let k = 0; k < column; k++){
            arrOfLetter.push(alphabets[Math.floor(Math.random() * alphabets.length)])
        }
        board.push(arrOfLetter);
    }
    console.log(board)
    for(let z = 0; z < board.length-1; z ++){
        for(let k = 0; k < board[z].length-1    ; k++){
            if(vowels.toUpperCase().indexOf(board[z][k]) !== -1 && vowels.toUpperCase().indexOf(board[z][k+1]) !== -1 && vowels.indexOf(board[z+1][k]) !== -1 && vowels.indexOf(board[z+1][k+1]) !== -1){
             countChecker++   
            }
        }
    }
    console.log(countChecker)
}

vowelChecker(5,3)