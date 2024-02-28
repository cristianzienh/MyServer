const name = "Cristian";

console.log("hello " + name);

let numero1;
numero1 = 10;
const numero2 = 2;
result = calcula(numero1,numero2);

if (result < 10) {
    console.log("resultado = " + result);
} else {
    console.log("resultado maior que 10");
}

function calcula(a,b) {
    return a/b;
} 

let flag = false;

if (flag) {
    console.log("flag false")
} else {
    console.log("flag true")
}

let i = 0;

//for (initialization; condition; increment/decrement) 
for(i=0;i<6;i++) {
    console.log(i);
}

while(!flag) {
    console.log(i);
    i--;
    if (i < 0) flag = true;
}