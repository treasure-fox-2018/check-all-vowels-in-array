function nestedArray(jumlahRow, jumlahCol) {
  var arrFinal = [];
  for (var j = 0; j < jumlahRow; j++) {
   var arrCollumn = [];
   for (var i = 0; i < jumlahCol; i++) {
     var str = randomCharacter();
     arrCollumn.push(str)
   }
   arrFinal.push(arrCollumn)
}
  // console.log(arrFinal);
  return arrFinal;
}

function randomCharacter() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var randomStr = "";
  randomStr += alphabet.charAt(Math.trunc(Math.random() * alphabet.length));
  return randomStr;
}

function checkBlockConvert(arr) {
  var allVowelsBlock = 0;
  var allConsonantsBlock = 0;
  var arrAllVowelsBlock = [];
  for (var j = 0; j < arr[0].length - 1; j++) {

    for (var i = 0; i < arr.length - 1; i++) {
      // var current =
      let str = arr[i][j] + arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1];
      // console.log(arr[i+1][0]);
      var arrDisplay = [arr[i][j], arr[i][j+1], arr[i+1][j], arr[i+1][j+1]];
      // console.log(arrDisplay);
      var booleanVowel = checkAllVowels(str);
      if (booleanVowel) {
        allVowelsBlock ++;
        arrAllVowelsBlock.push(arrDisplay + "|")
      } else {
        allConsonantsBlock ++;
      }
    }
  }
  var stringReturn = "Number of Vowels Block: " + allVowelsBlock + ", All Vowels Block: " + arrAllVowelsBlock;
  return stringReturn;
}


function checkAllVowels(string) {
  // debugger;

  var arrUpCaseVowels = ["A", "I", "U", "E", "O"];

  var arrString = string.split("");

  if (arrString.length === 0) {
    return true;
  }

  for (var j = 0; j < arrUpCaseVowels.length; j++) {
    var inspectorUp = arrUpCaseVowels[j];
    if (arrString[0] === inspectorUp) {
      arrString.shift();
      var nextStringUp = arrString.join("");
      return checkAllVowels(nextStringUp);
    }
  }
  return false;
}

// console.log(nestedArray(3, 3));
console.log(checkBlockConvert(nestedArray(3, 4)));
