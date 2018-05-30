function randomBoard(row,col){
	var dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	var board = []

	for(var a = 0; a < row; a++){
		var isiBoard = []

		for(var b = 0; b < col; b++){
			isiBoard.push(dict.substr(Math.floor(Math.random()* dict.length), 1))
		}
		board.push(isiBoard)
	}

	return board;
}


function checkVowels(str){

	if(str === 'A' || str === 'I' || str === 'U' || str === 'E' || str === 'O'){
		return true;
	} else {
		return false;
	}
	
}

function checkVowelsInArr(arr){

	var vowelBlocks = 0

	for(var k = 0; k < arr.length; k++){
		for(var l = 0; l < arr[k].length; l++){
			if(k !== arr.length-1){
				if(checkVowels(arr[k][l]) === true){
					if(checkVowels(arr[k][l+1]) === true){
						if(checkVowels(arr[k+1][l]) === true){
							if(checkVowels(arr[k+1][l+1]) === true){
								vowelBlocks += 1
							}
						}
					}
				}
			}
		}
	}

	console.log(vowelBlocks)

}

var arr = [['A','X','C','Y'],
		   ['E','O','O','S'],
		   ['I','U','I','N'],
		   ['M','Y','O','E'],
		   ['P','D','A','I']
		  ]

console.log(checkVowelsInArr(arr));

console.log(checkVowelsInArr(randomBoard(5,4)))