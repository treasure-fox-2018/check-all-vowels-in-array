function stringToArray(string){
    let mainArr = []
    let childArr = []
    let splitString = string.split(',')
    let vocals = 'AIUEOaiueo'
    
    //membuat arr dari string
    for(let i = 0; i < splitString.length; i++){
        for(let j = 0; j < splitString[i].length; j++){
            childArr.push(splitString[i][j])
        }
        mainArr.push(childArr)
        childArr = []
    }
    
    // membuat array untuk menampung tiap blok
    blok = ''
    arrBlok = []
   for(var i = 0; i < mainArr.length-1; i++){
        for(var j = 0; j < mainArr[i].length-1; j++){
            blok = mainArr[i][j]+mainArr[i][j+1]+mainArr[i+1][j]+mainArr[i+1][j+1]
            arrBlok.push(blok)
        }
   }
//    console.log(arrBlok);
   
    
   //cek, jika array ke sekian semuanya vocals 
   count=0
   jmlArr = 0
   for(var i = 0; i < arrBlok.length; i++){
        for(var j = 0; j < arrBlok[i].length;j++){
            for(var k = 0; k < vocals.length; k++){
                if(arrBlok[i][j] === vocals[k]){
                    count++
                }
            }
        }
        if(count === 4){
            jmlArr++
        }
        count = 0
   }
   return jmlArr
}

console.log(stringToArray('AXCY,EOOS,IUIN,MYOE,PDAI'));

