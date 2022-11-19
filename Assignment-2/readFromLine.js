let readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


r1.question('please enter your name\n', res=>{
    console.log('Hello ', res)
    r1.close()
})