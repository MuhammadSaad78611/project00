var prompt = require('prompt-sync')();

let n1 = parseInt(prompt("enter your first number:"));

let n2 = parseInt(prompt("enter your second number:"));

let op = (prompt("ente your operator:"));

if (op == '+'){
    console.log(`$(n1+n2)`)
}

if (op=='-'){
    console.log(`${n1-n2}`)
}

if (op=='*'){
    console.log(`${n1*n2}`)
}

if (op== '/'){
    console.log(`${n1/n2}`)
}
else{
    console.log("please enter correct opperator");
}

export{};