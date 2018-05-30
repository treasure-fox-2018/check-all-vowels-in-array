function createNestedArr(row, col) {
  let abjad = 'abcdefghijklmnopqrstuvwxyz';
  let dalam = []
  let luar = []

  for (let i = 0; i < row; i++) {
    dalam = []
    for (let j = 0; j < col; j++) {
      dalam.push(abjad[Math.floor(Math.random() * abjad.length)])
    }
    luar.push(dalam)
  }
  return luar
}
//
// console.log(createNestedArr(5, 3))
// console.log(createNestedArr(4, 2))


function vowelCheck(arr) {
  let vokal = 'aiueo'
  let count = 0
  let see = []
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr[i].length - 1; j++) {
      let vocalcount = 0;

      var isi = arr[i][j] + '' + arr[i][j + 1] + arr[i + 1][j] + '' + arr[i + 1][j + 1];
      see.push(isi)

      for (let l = 0; l < isi.length; l++) {

        for (let k = 0; k < vokal.length; k++) {

          if (isi[l] === vokal[k]) {
            vocalcount++
          }

        }
        if (vocalcount === isi.length) {
          result++
        }
      }


    }


  }
  console.log(result, 'blocks found')
  return arr

}


var isi2 = [
  ['u', 'e', 'i', 'v'],
  ['a', 'a', 'o', 'y'],
  ['g', 'b', 'i', 'q'],
  ['e', 'i', 'i', 'h'],
  ['z', 'o', 'e', 's'],
];

let isi1 = createNestedArr(4, 4)

console.log(vowelCheck(isi1)) // random generated array
console.log(vowelCheck(isi2)) // predefined array
