// var arrContoh = [
//     ['A', 'X', 'C', 'Y'],
//     ['E', 'O', 'O', 'S'],
//     ['I', 'U', 'I', 'N'],
//     ['M', 'Y', 'O', 'E'],
//     ['P', 'D', 'A', 'I']
// ];


function checkVowels(arrContoh) {
    var boxCounter = 0;

    for (var i = 0; i < arrContoh.length - 1; i++) {
        // console.log(i);
        for (var j = 0; j < arrContoh[i].length - 1; j++) {
            // console.log(j);
            var temp = arrContoh[i][j] + arrContoh[i][j+1] + arrContoh[i+1][j] + arrContoh[i+1][j+1];
            // console.log(temp);
            if (checkVowelBox(temp) === true) {
                boxCounter += 1;
            }
        }
    }
    return boxCounter;
}

function generateBoard(jumlahRow, jumlahCol) {
    var mainBoard = []
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomize = 0;

    for (let i = 0; i < jumlahRow; i++) {
        var rowArr = [];
        for (let j = 0; j < jumlahCol; j++) {
            randomize = (Math.floor(Math.random() * alphabet.length));
            rowArr.push(alphabet.charAt(randomize));
            // console.log(randomize);
        }
        mainBoard.push(rowArr);
    }
    return mainBoard;
}

function checkVowelBox(temp) {
    var vowels = 'AEIOU';
    var counterVowels = 0;

    for (var x = 0; x < temp.length; x++) {
        // console.log(x);
        for (var y = 0; y < vowels.length; y++) {
            if (temp[x] === vowels[y]) {
                var isVowels = true;
                y = vowels.length;
            } else {
                isVowels = false;
            }
        }
        if (isVowels === true) {
            counterVowels += 1;
        }
    }
    if (counterVowels === temp.length) {
        return true;
    } else {
        return false;
    }
}
var arr = generateBoard(5, 4);
console.log(arr);
console.log(checkVowels(arr));