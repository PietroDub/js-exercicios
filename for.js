const readlineSync = require('readline-sync');

// 1️⃣ Contar de 1 a 50
// Use um for para imprimir todos os números de 1 a 50 no console.

for(let i = 1; i <= 50; i++ ){
    console.log(`O número é: ${i}`)
}


// 2️⃣ Tabuada de qualquer número
// Peça ao usuário um número e use um for para mostrar a tabuada dele de 1 a 10.

let resp = readlineSync.question("Digite um número para a tabuada:")

for( let x = 1; x <= 10; x++){
    console.log(`${x} * ${resp} = ${x * resp}`)
}

// 3️⃣ Somar números pares de 1 a 100
// Use um for para somar todos os números pares de 1 a 100 e mostre o resultado.
let soma = 0

for(let num = 1; num <= 100; num++){
    if(num % 2 == 0){
        soma = soma + num
    }
}

console.log(`A soma de todos os números é: ${soma}`)

//  4️⃣ Contagem regressiva
// Peça um número e faça uma contagem regressiva até zero usando for. Mostre cada número.

let regresso = readlineSync.question("Digite um número:")

for(let r = regresso; r <= regresso; r--){
    if(r > 0){
        console.log(`Contando: ${r}`)
    }
}

console.log("Fim 4")

// 5️⃣ Contar letras de uma palavra
// Peça uma palavra e use um for para percorrer cada letra, mostrando cada uma separadamente no console.

let palavra = readlineSync.question("Digite uma palavra: ")

for(let letra = 0; letra < palavra.length; letra++){
    console.log(palavra[letra])
}

// 6 Imprimir múltiplos de 3
// Use um for para imprimir no console todos os múltiplos de 3 de 1 a 30.


for(let mult = 1; mult <= 30; mult++){
    if(mult % 3 == 0){
        console.log(mult)
    }
}

// 7 Fatorial de um número
// Peça ao usuário um número inteiro positivo e use um for para calcular o fatorial dele.
// Exemplo: fatorial de 5 é 5 × 4 × 3 × 2 × 1 = 120.


let nPostivo = parseInt(readlineSync.question("Digite um número para fatorar:"))
let fatorial = 1

for(let p = nPostivo; p >= 1; p--){
   fatorial = fatorial * p
}

 console.log(`O fatorial é = ${fatorial}`)


// 8 Soma dos ímpares
// Use um for para somar todos os números ímpares de 1 a 50.
// Mostre o resultado no final.
let soma2 = 0

for(let impar = 1; impar <= 50; impar++){
    if(impar % 2 != 0){
        soma2 = soma2 + impar
    }
}

// 9 Contar letras “a”
// Peça ao usuário uma frase.
// Use um for para contar quantas vezes aparece a letra “a” (ou “A”)

let frase = readlineSync.question(`Escreva uma frase:`)
asss = 0

for(let letras = 1; letras < frase.length; letras++){
    if(frase[letras] == "A" || frase[letras] == "a"){
        asss++
    }
}

console.log(`Você digitou ${asss} "A"`)

// 10 Mostrar elementos de um array
// Crie um array com 5 nomes.
// Use um for para percorrer o array e mostrar cada nome no console.

let array = ["Pedro", "Anna", "Pietro", "Marcelo", "Duda"]

for(j = 0; j <= array.length; j++){
    console.log(`Aluno: ${j}, Nome: ${array[j]}`)
}


