const nome = "Cristiana"
let idade = 20
if (idade >= 18) {
    console.log("Venda de bebida alcólica permitida para " + nome)
} else {
    console.log("Venda de bebida alcólica proibida")
}

let isTeacher = true;

if (isTeacher) {
    console.log (nome + " é professor!")
}

function soma(a,b) {
    let aux = a + b
    return aux
}

console.log("Resultado da soma: " + soma(10, 12))


//conta a qtde de vogais na variavel nome
let x = 0
let qtdVogais = 0
while(x<nome.length) {
    if (nome[x] == 'a' || 
       nome[x] == 'e' || 
       nome[x] == 'i' ||
       nome[x] == 'o' ||
       nome[x] == 'u') { 
        qtdVogais++
    }
    x++
}
console.log(`encontrei ${qtdVogais} vogais no nome ${nome}`)


// console.log('hello world, my name is ' + nome)
