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


    function isVowel(data) {
        if (data == 'a' || data == 'i' || data == 'u' || data == 'e' || data == 'o') {
            return true
        }
    }

    count = 0
    for (let i = 0; i < jmlRow; i++) {
        for (let j = 0; j < jmlCol; j++) {
            if (arr[i][j] !== undefined && isVowel(arr[i][j])) {
                if (arr[i+1] !== undefined) {
                    if (arr[i][j+1] !== undefined && isVowel(arr[i][j+1])) {
                        if (arr[i+1][j] !== undefined && isVowel(arr[i+1][j])) {
                            if (arr[i+1][j+1] !== undefined && isVowel(arr[i+1][j+1])) {
                                count++
                            }
                        }
                    }
                }
            }
        }
    }
        
    console.log(arr);
    
    return count
}

console.log(checkAllVowels(6,4));

