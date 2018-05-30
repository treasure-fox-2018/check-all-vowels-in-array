function checkVowels(arr){
  const vowels = 'AIUEO';
  var arr2 = [];
  var vowelBLocks = 0;


  for (var i = 0; i < arr.length; i++) {
    arr2.push([]);
    for (var j = 0; j < arr[i].length; j++) {
      arr2[i].push('cons');
      for (var k = 0; k < vowels.length; k++) {
        if (arr[i][j] === vowels[k]) {
          arr2[i].splice(j,1,'vowel')
        }
      }
    }
  }

  for (var i = 0; i < arr2.length - 1; i++) {
    for (var j = 0; j < arr2[i].length - 1; j++) {
      if (arr2[i][j] === 'vowel'&& arr2[i][j+1] === 'vowel' && arr2[i+1][j] ==='vowel' && arr2[i+1][j+1] === 'vowel') {
        vowelBLocks += 1;
      }
    }
  }
  return vowelBLocks;
}

console.log(checkVowels([
                         ['A','X','C','Y'],
                         ['E','O','O','S'],
                         ['I','U','I','N'],
                         ['M','Y','O','E'],
                         ['P','D','A','I']
                       ]));

                     /*
                       [ [ 'o', 'x', 'x', 'x' ],
                         [ 'o', 'o', 'o', 'x' ],
                         [ 'o', 'o', 'o', 'x' ],
                         [ 'x', 'x', 'o', 'o' ],
                         [ 'x', 'x', 'o', 'o' ] ]
                       */
