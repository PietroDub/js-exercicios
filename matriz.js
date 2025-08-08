const readlineSync = require('readline-sync');


// 1️⃣ Imprimir todos os elementos de uma matriz
// Enunciado:

// Crie uma matriz 3x3 com números inteiros.

// Use dois for aninhados para percorrer linha por linha e imprima cada elemento no console.

let matriz1 = []

for(let linha = 1; linha <= 3; linha++){
    for(let coluna = 1; coluna <= 3; coluna++){
        matriz1[linha][coluna] = parseInt(readlineSync.question("Digite um número inteiro:"))
    }
}

for(let linha = 1; linha <= 3; linha++){
    for(let coluna = 1; coluna <= 3; coluna++){
       console.log(matriz1[linha][coluna])
    }
}


// 2️⃣ Soma dos elementos de uma matriz
// Enunciado:

// Crie uma matriz 4x4 com números inteiros.

// Some todos os elementos e mostre o resultado final.
let soma = 0
let matriz2 = []

for(let i = 1; i <= 4; i++){
    for(let j = 1; j <= 4; j++){
        matriz2[i][j] = parseInt(readlineSync.question("Digite um número inteiro:"))
    }
}

for(let i = 1; i <= 4; i++){
    for(let j = 1; j <= 4; j++){
        soma = soma + matriz2[i][j]
    }
}

console.log(soma)

// 3️⃣ Contar números pares em uma matriz
// Enunciado:

// Peça ao usuário para preencher uma matriz 3x3 (ou use valores fixos).

// Percorra a matriz com for aninhado e conte quantos números pares existem.

// Mostre o total de pares.

let par = 0

let matriz = [
  [2, 5, 8],
  [7, 4, 6],
  [9, 10, 3]
];

for(let li = 1; li <= 3; li++){
    for(let co = 1; co <= 3; co++){
        if(matriz[lo][co] % 2 == 0){
            par++
        }
    }
}

// 4️⃣ Criar matriz identidade
// Enunciado:

// Crie um programa que gere e imprima uma matriz identidade de ordem 3x3.
// (Dica: matriz identidade tem 1 na diagonal principal e 0 nos outros elementos).

let matriz4 = [
    [1, 0, 0]
    [0, 1, 0]
    [0, 0, 1]
];

for(let line = 1; line <= 3; line++){
    for(let column = 1; column <= 3; column++){
        console.log(matriz4[line][column])
    }
}

// 5️⃣ Somar elementos de cada linha                                   
// Enunciado:

// Crie uma matriz 3x3 com números inteiros.

// Use for aninhado para calcular a soma de cada linha.

// Mostre a soma de cada linha separadamente.

let matriz5 = [
  [2, 5, 8],
  [7, 4, 6],
  [9, 10, 3]
];

somaLin = [0,0,0]

for(let lin = 0; lin <= 2; lin++){
    for(let col = 0; col <= 2; col++){
        somaLin[lin] = somaLin[lin] + matriz5[lin][col] 
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    )

for(let i = 0; i <= 2;i++){
    console.log(somaLin[i])
}