const fs = require('fs')
let start = new Date()
let data = JSON.parse(fs.readFileSync('./data.json'))
function gen() {
    let res = {};
    let i=3100000;
    while ( i<3200000) {
        res[i] = 0;
        let g=0;
        while (g<=i/2) {
            if(i%g==0) {
                res[i] += g;
            }
            g++;
        }
        console.log(i)
        i++;
    }
    return res;
}
fs.writeFileSync("./data.json", JSON.stringify(Object.assign(data, gen())))
console.log((new Date() -start)/1000)
