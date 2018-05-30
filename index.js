//CHECK VOWEL -
function createNestedArr(jumlahRow, jumlahCol) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';

  var isi = Math.floor(Math.random() * abjad.length);

  var dalam = [];
  var luar = [];

  for (let k = 0; k < jumlahRow; k++) {
    dalam = [];
    for (let l = 0; l < jumlahCol; l++) {
      dalam.push(abjad[Math.floor(Math.random() * abjad.length)]);
    }

    luar.push(dalam);
  }

  return luar;
}

function vokal(kata) {
  var vokal = 'aiueo';
  var save = [];
  var hitung = 0;
  var score = 0;
  for (let i = 0; i < kata.length - 1; i++) {
    for (let j = 0; j < kata[i].length - 1; j++) {
      hitung = 0;
      var isi = kata[i][j] + '' + kata[i][j + 1] + kata[i + 1][j] + '' + kata[i + 1][j + 1];

      for (let j = 0; j < isi.length; j++) {
        for (let i = 0; i < vokal.length; i++) {
          if (isi[j].toLowerCase() == vokal[i].toLowerCase()) {
            hitung++;
          }
        }
        if (hitung === isi.length) {
          score++;
        }
      }
    }
  }

  return score;
}

// Isi2 is predefined only
var isi2 = [
  ['u', 'e', 'i', 'v'],
  ['a', 'a', 'o', 'y'],
  ['g', 'b', 'i', 'q'],
  ['e', 'i', 'i', 'h'],
  ['z', 'o', 'v', 's'],
];

var isi = createNestedArr(5, 4);

console.log(vokal(isi2));
console.log(isi2);

//
console.log(vokal(isi));
console.log(isi);
