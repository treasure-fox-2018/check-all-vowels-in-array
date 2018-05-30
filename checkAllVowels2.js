function generateBoard(row, collumn) {
    let board = [];
    let alphabet = 'ABCDEFGHIJKLOPQRU';
    
    for(let i = 0; i < row; i++) {
        board.push([]);

        for(let j = 0; j < collumn; j++) {
            let rnd = alphabet[Math.floor(Math.random() * 17)];
            board[i].push(rnd);
        }
    }
    let tempBoard = 0;

    for(let i = 0; i < board.length-1; i++) {
        for(let j = 0; j < board[i].length-1; j++) {
            let area1 = board[i][j];
            let area2 = board[i][j+1];
            let area3 = board[i+1][j];
            let area4 = board[i+1][j+1];
            
            if(area1 == 'A' || area1 == 'E' || 
            area1 == 'I' || area1 == 'O' || area1 == 'U') {
                tempBoard++;
            }
            if(area2 == 'A' || area2 == 'E' || 
            area2 == 'I' || area2 == 'O' || area2 == 'U') {
                tempBoard++;
            }
            if(area3 == 'A' || area3 == 'E' || 
            area3 == 'I' || area3 == 'O' || area3 == 'U') {
                tempBoard++;
            }
            if(area4 == 'A' || area4 == 'E' || 
            area4 == 'I' || area4 == 'O' || area4 == 'U') {
                tempBoard++;
            }
            if(tempBoard == 4) {
                let vowelBoard = [area1, area2, area3, area4];
                console.log(`Vowel Letters : ${vowelBoard}`);
            }
            tempBoard = 0;
        }
    }
    
    return board;
}

console.log(generateBoard(5, 4));