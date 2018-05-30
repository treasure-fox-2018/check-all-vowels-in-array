function checkAllVowels(jmlRow, jmlCol) {
    var huruf = 'aaaaiiiiuuueeeoookdfkdfjep'
    var arr = []
    for (let i = 0; i < jmlRow; i++) {
        var isi = []
        for (let j = 0; j < jmlCol; j++) {
            var num = Math.floor(Math.random() * 26)
            isi.push(huruf[num])
       }
       arr.push(isi)
    }

    var indexVowel = []
    for (let i = 0; i < jmlRow; i++) {
        var arrIsi = []
        for (let j = 0; j < jmlCol; j++) {
            if (arr[i][j] == 'a' || arr[i][j] == 'i' || arr[i][j] == 'u' || arr[i][j] == 'e' || arr[i][j] == 'o') {
                arrIsi.push(j)
            }
        }
        indexVowel.push(arrIsi)
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            
        }
    }

    console.log(arr);
    
    return indexVowel
}

console.log(checkAllVowels(6,4));

