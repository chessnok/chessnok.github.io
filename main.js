let data = {};
let settings = {
    "url": "https://chessnok.github.io/data.json",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    data=response
    $('body').append('<button onclick="generateAll()">Показать Результаты</button>')
});
function generateAll() {
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
            easy.push(num);
        }
    }
    $('body').append(`Простых чисел: ${easy.length}\n`)
    $('body').append(`Общительных чисел: ${sociables.length} \nи это : \n${sociables}\n`)
    $('body').append(`Идеальных чисел: ${ideal.length} \nи это : \n${ideal}\n`)
    $('body').append(`Дружественных чисел: ${frendly.length} \nи это : \n${frendly}\n`)

}