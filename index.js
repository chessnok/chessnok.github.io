const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./data.json'))
function getalicvote(num) {
    return data[num]
}
let num1=0;
let frendly = [];
let easy =[];
let ideal = [];
let sociables=[];
let ignoresoc = [];
let ignorefriend = [];
while ( num1<3000000) {
    let num2 = getalicvote(num1)
    let num3 = getalicvote(num2)
    let num4 = getalicvote(num3)
    if ((num1 == num2 || num1 == num3 || num1 == num4 ||num2 ==num3 ||num2 == num4|| num3 == num4|| ignoresoc.some((element) => element != num1||element != num2||element != num3||element != num4)) == false) {
        if(getalicvote(num4) == num1 && num1 != num2&&num2 != num3&& num3 !=num4) {
            ignoresoc.push(num1, num2, num3, num4)
            sociables.push([num1,num2,num3,num4])
        }
    }
    if (getalicvote(num1) ==1) {
        easy.push(num1);
    }
    if(getalicvote(num1) == num1) {
        ideal.push(num1);
    }
    if(getalicvote(num1) == getalicvote(getalicvote(num1)) && ignorefriend.every((element) => element != num1)) {
        frendly.push([num1,getalicvote(num1)])
        ignorefriend.push(num1, getalicvote(num1))
    }

    num1++;

}
for (let num =0; num<3000000;num++) {
    if (getalicvote(num) ==1) {
        easy++;
    }
}
console.log(`Простых чисел: ${easy.length}\n`)
console.log(`Общительных чисел: ${sociables.length} \nи это : \n${sociables}\n`)
console.log(`Идеальных чисел: ${ideal.length} \nи это : \n${ideal}\n`)
console.log(`Дружественных чисел: ${frendly.length} \nи это : \n${frendly}\n`)
