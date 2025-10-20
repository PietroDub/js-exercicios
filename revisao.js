const palavra = "banana";
const contagem = {};
for (let letra of palavra) {
  if(contagem[letra] >= 1){
    contagem[letra] = (contagem[letra]) + 1;
  } else {
    contagem[letra] = (0) + 1;
  }
}
console.log(contagem);

//🧱 STACK (PILHA) → push() e pop()
// 1️⃣ Adicione 3 números à pilha e remova o último.
const stack1 = [];
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.pop()); // 30

//🚶 QUEUE (FILA) → push() e shift()
// 1️⃣ Adicione 3 nomes à fila e remova o primeiro.
const fila = [];
fila.push("Ana");
fila.push("Bruno");
fila.push("Carlos");
console.log(fila.shift()); // "Ana"

// 3️⃣ Inverta uma fila usando pilha.
function inverterFila(fila) {
  const pilha = [];
  while (fila.length > 0) pilha.push(fila.shift());
  while (pilha.length > 0) fila.push(pilha.pop());
  return fila;
}

//🧩 SET → remover duplicatas, verificar existência rapidamente

// 1️⃣ Remova duplicatas de um array.
const numeros = [1, 2, 2, 3, 4, 4];
console.log([...new Set(numeros)]);

// 2️⃣ Verifique se há elementos repetidos.
function temDuplicata(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(temDuplicata([1,2,3,2])); // true


//🧠 MAP / OBJECT → contar ocorrências e guardar pares chave-valor
// 1️⃣ Contar frequência de letras.
const palavra = "banana";
const contagem = {};
for (let letra of palavra) {
  contagem[letra] = (contagem[letra] || 0) + 1;
}
console.log(contagem); // { b:1, a:3, n:2 }


// 2️⃣ Contar frutas.
const frutas = ["maçã", "banana", "maçã", "uva", "banana"];
const mapa = new Map();
for (let fruta of frutas) {
  mapa.set(fruta, (mapa.get(fruta) || 0) + 1);
}
console.log(mapa);


// 🔹 Bubble Sort
// Compara elementos adjacentes e troca se estiver fora de ordem.

// 🔹 Selection Sort
// Procura o menor elemento e coloca no início.

// 🔹 Insertion Sort
// Insere cada elemento na posição correta de uma parte já ordenada.

// 🔹 Merge Sort (entenda a ideia)
// Divide o array em duas partes, ordena e junta.

// 🔹 Quick Sort (entenda a ideia)
// Escolhe um pivô e separa elementos menores e maiores.












// 🕐 1:20 – 2:00 → Prática rápida e simulação (40 min)
// Faça 3 mini-desafios:
// Verificar se um número está no array ✅
// Ordenar array de números ou nomes (Bubble Sort) ✅
// Contar frequências (Map/Object) ✅
// Tente resolver sem olhar a resposta, e depois confira.

const array = [1,2,3,4,5,6];
let num = 2;

for(let i = 0; i < array.length; i++){
    if(array[i] == num){
        console.log("YES");
    } else{
        console.log("NO");
    }
}

const input = ["maçã", "banana", "maçã", "uva", "banana", "maçã"];
const contagem = {};

for (let fruta of input) {
  contagem[fruta] = (contagem[fruta] || 0) + 1;
}
console.log(contagem);

  // Exemplo de entrada:
  // 9 3 5 1 8 2
  const arr = input.trim().split(' ').map(Number);

  // Algoritmo Bubble Sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // troca usando destructuring
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log(arr.join(' ')); // Saída: 1 2 3 5 8 9
});