function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {              // Passagens
    for (let j = 0; j < arr.length - i - 1; j++) {    // Comparações
      if (arr[j] > arr[j + 1]) {                      // Se fora de ordem
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Troca usando destructuring
      }
    }
  }
  return arr;
}
// Linha por linha:
// for (let i = 0; i < arr.length; i++)
// → Controla quantas vezes o array será percorrido.
// (Cada passada posiciona o próximo maior número no final).

// for (let j = 0; j < arr.length - i - 1; j++)
// → Faz as comparações entre os pares.
// → O - i - 1 impede comparações com os elementos que já estão no lugar certo.

// if (arr[j] > arr[j + 1])
// → Verifica se o par está fora de ordem (maior vem antes do menor).

// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
// → Troca os valores de posição (técnica moderna usando destructuring assignment).

// return arr
// → Retorna o array ordenado.

// 🧩 1. Ordenação crescente simples

// Crie uma função que utilize Bubble Sort para ordenar o array abaixo em ordem crescente e exiba o resultado no console.

const numeros = [9, 3, 5, 1, 8, 2];


// 📌 Objetivo: entender o funcionamento básico do algoritmo.
// 💡 Dica: copie a estrutura básica do bubble sort e aplique.

// 🧩 2. Ordenação decrescente

// Utilizando o mesmo algoritmo Bubble Sort, agora ordene o array abaixo em ordem decrescente.

const numeros1 = [4, 10, 1, 6, 2, 9];


// 📌 Objetivo: inverter a condição de comparação (> → <).
// 💡 Dica: só muda o sinal dentro do if.

// 🧩 3. Ordenar nomes em ordem alfabética

// Usando Bubble Sort, ordene os nomes abaixo em ordem alfabética (A → Z).

const nomes = ["Carlos", "Ana", "Beatriz", "João", "Eduardo"];


// 📌 Objetivo: aplicar comparação entre strings (> e < funcionam para comparar textos).
// 💡 Dica: teste também nomes com letras minúsculas e maiúsculas — o comportamento muda.

// 🧩 4. Ordenar objetos por preço

// Dado o array de objetos, ordene pelo preço (preco) do menor para o maior, usando Bubble Sort.

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 900 },
  { nome: "Mouse", preco: 50 },
  { nome: "Cadeira", preco: 350 }
];


// 📌 Objetivo: praticar comparação de propriedades dentro de objetos.
// 💡 Dica: use if (arr[j].preco > arr[j + 1].preco).

// 🧩 5. Bubble Sort otimizado

// Implemente o Bubble Sort otimizado (com a verificação de trocas) e teste com este array:

const numeros3 = [1, 2, 3, 4, 5];


// 📌 Objetivo: fazer com que o algoritmo detecte que o array já está ordenado e interrompa o loop antecipadamente.
// 💡 Dica: use uma variável booleana trocou para marcar se houve troca.