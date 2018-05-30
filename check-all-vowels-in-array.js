function checkAllVowelsArray(row,col) {
  var result = []
  var temp = []
  // var temp = [['a','x','c','y'],['e','o','o','s'],['i','u','i','n'],['m','y','o','e'],['p','d','a','i']]
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var vocal = 'aiueo'
  for (var i = 0; i < row; i++) {
    var rowArr = []
    for (var j = 0; j < col; j++) {
      var index = Math.floor(Math.random()*alphabet.length)
      rowArr.push(alphabet[index])
    }
    temp.push(rowArr)
  }

  //check vowels
  for (var k = 0; k < row-1; k++) {
    for (var l = 0; l < col-1; l++) {
      var vowels = ''
      vowels += temp[k][l]
      vowels += temp[k][l+1]
      vowels += temp[k+1][l]
      vowels += temp[k+1][l+1]

      var status = checkAllVowels(vowels)
      // console.log(vowels);
      // console.log(status);
      if (status) {
        result.push(vowels)
      }
      // console.log(temp);
    }
  }
  return `ada ${result.length} block, yang berisi [${result}]`
  // return result;
}

//function check vowels

function checkAllVowels(string) {
  var vocals = 'aiueo'
  for (var i = 0; i < string.length; i++) {
    var status = false
    for (var j = 0; j < vocals.length; j++) {
      if (string[i]===vocals[j]||string[i]===vocals[j].toUpperCase()) {
        status = true;
      }
      // console.log(status);
    }
    if (status==false) {
      return status;
    }
  }
  return status;

}


console.log(checkAllVowelsArray(5,4));
