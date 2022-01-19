const fs = require('fs')
let start = new Date()
let data = JSON.parse(fs.readFileSync('./data.json'))
function gen() {
    let res = {};
    let i=3000000;
    while ( i<4000000) {
        res[i] = 0;
        let g=0;
        while (g<=i/2) {
            if(i%g==0) {
                res[i] += g;
            }
            g++;
        }
        i++;
    }
    return res;
}
gen()
fs.writeFileSync("./data.json", JSON.stringify(Object.assign(data, gen())))
console.log((new Date() -start)/1000)
