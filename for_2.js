const readlineSync = require('readline-sync');




// 11️⃣ Potências de 2
// Use um for para imprimir as potências de 2 de 2¹ até 2¹⁰.
// (Exemplo de saída: 2, 4, 8, 16, …, 1024)

for(let expoente = 0; expoente <= 10; expoente++){
    console.log(2 ** expoente)
}

//  12️⃣ Contar números divisíveis por 4
// Peça ao usuário um número N.
// Use um for para contar quantos números de 1 até N são divisíveis por 4.
// Mostre o total encontrado.

let N = readlineSync.question(`Digite um número:`)
let somatoria = 0

for(let numer = 1; numer <= N; numer++){
    if(numer % 4 == 0){
        somatoria++
    }
}

console.log(somatoria)

//  13️⃣ Inverter palavra
// Peça uma palavra ao usuário.
// Use um for para imprimir essa palavra de trás pra frente.

let word = readlineSync.question("Digite uma palavra:")

for(let i = word.length; i <= word.length; i--){
    if(i >= 0){
        console.log(word[i])
    }
}


// 14️⃣ Soma de múltiplos de 5
// Use um for para somar todos os múltiplos de 5 no intervalo de 1 a 100.
// Mostre o resultado final.

let somar = 0

for(let ii = 1; ii <= 100; ii++){
    if(ii % 5 == 0){
        somar = somar + ii
    }
}

console.log(somar)

// 15️⃣ Multiplicar todos os elementos de um array
// Crie um array com 5 números.
// Use um for para multiplicar todos os números e mostrar o produto total.

let array = [1, 20, 30, 10, 2]
let mult = 1

for(let j = 0; j <= array.length; j++){
    mult = mult * array[j]
}

