var alphabetBoard2 = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I'],
];

/**
 * @function checkAllVowels
 * fungsi akan mencari vowel box yang ada dalam multidimensional array
 * @param {array} vowelsArr input array multidimensi alfabet acak
 * @returns {integer} vowelBoxCount fungsi mengembalikan nilai seberapa banyak vowelbox 2x2 yang terdapat pada input
 */

function checkAllVowels(vowelsArr) {
    let vowelBoxCount = 0;

    for (let i = 0; i < vowelsArr.length-1; i++) {
        for (let j = 0; j < vowelsArr[i].length-1; j++) {
            let stringBox = vowelsArr[i][j] + vowelsArr[i][j+1] + vowelsArr[i+1][j] + vowelsArr[i+1][j+1];
            if (checkStrVowels(stringBox) === true) {
                vowelBoxCount += 1;
            }
        }
    }

    return vowelBoxCount;

}

/**
 * @function checkStrVowels
 * fungsi melakukan pengecekan apabila input terdiri dari huruf vowels seluruhnya atau tidak
 * @param {string} str input string dari vowelBox yang telah dicreate pada function checkAllVowels
 * @returns {boolean} mengembalikan true apabila string merupakan seluruhnya vowels, dan false bila sebaliknya
 */

function checkStrVowels(str) {
    let vowelsCharacter = 'AIUEO';
    var isStrVowels = 0;

    for (let k = 0; k < str.length; k++) {
        let isVowels = false;
        for (let l = 0; l < vowelsCharacter.length; l++) {
            if (str[k] === vowelsCharacter[l]) {
                isVowels = true;
                l = vowelsCharacter.length;
            } else {
                isVowels = false;
            }
        }


        if (isVowels === true) {
            isStrVowels += 1;
        }
    }

    if (isStrVowels === str.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * @function createNestedArr
 * membuat nested array / multidimensional array dengan isi afabet acak sesuai jumlah kolom dan baris yg ditentukan
 * @param {integer} jumlahrow jumlah baris/ row and @param {integer} jumlahCol jumlah kolom/ column
 * @returns {array} mengembalikan array multidimensi berisi alfabet acak dengan jumlah kolom dan baris yg sesuai
 */

function createNestedArr(jumlahrow, jumlahCol) {
    var boardArr = [];
    var randomNumber = 0;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < jumlahrow; i++) {
        let innerBoardArr = [];

        for (let j = 0; j < jumlahCol; j++) {
            randomNumber = Math.floor((Math.random() * 26) + 0);

            innerBoardArr.push(alphabet.charAt(randomNumber));
        }

        boardArr.push(innerBoardArr);
    }

    return boardArr;
}

let newBoard = createNestedArr(5,3);

console.log(checkAllVowels(newBoard));
