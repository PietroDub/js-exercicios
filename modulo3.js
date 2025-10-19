// 🧠 MÓDULO 3 – Estruturas de Dados Básicas
// 🎯 Objetivo: entender como armazenar e recuperar informações rapidamente.

// ============================================================
// 🔹 SET – Conjuntos (não aceita duplicatas)
// ============================================================

// Um Set armazena valores únicos. Ideal para remover duplicados.
const numerosComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = new Set(numerosComDuplicatas);

console.log("👉 Set com números únicos:", numerosUnicos); 
// Saída: Set(5) { 1, 2, 3, 4, 5 }

// Convertendo de volta para array:
const arrayUnico = [...numerosUnicos];
console.log("Array sem duplicatas:", arrayUnico);

// Verificando se um valor existe:
console.log("O número 3 está no conjunto?", numerosUnicos.has(3)); // true

// Adicionando e removendo valores:
numerosUnicos.add(6);
numerosUnicos.delete(2);
console.log("Depois de adicionar/remover:", numerosUnicos);

// ============================================================
// 🔹 MAP – Mapeamentos (pares chave → valor)
// ============================================================

// Um Map é como um “objeto melhorado”: aceita qualquer tipo de chave.
const frutas = new Map();
frutas.set("maçã", 5);
frutas.set("banana", 2);
frutas.set("laranja", 7);

console.log("👉 Quantas bananas tenho?", frutas.get("banana")); // 2

// Verifica se existe uma chave:
console.log("Tem maçã?", frutas.has("maçã")); // true

// Exibe todas as chaves e valores:
for (const [fruta, quantidade] of frutas) {
  console.log(`${fruta}: ${quantidade}`);
}

// ============================================================
// 🔹 OBJECT – Estrutura chave/valor tradicional
// ============================================================

const pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo"
};

// Acessando propriedades:
console.log("👉 Nome:", pessoa.nome);

// Adicionando nova chave:
pessoa.profissao = "Engenheira";

// Listando todas as chaves e valores:
for (const [chave, valor] of Object.entries(pessoa)) {
  console.log(`${chave}: ${valor}`);
}

// ============================================================
// 🔹 STACK – Pilha (LIFO: Last In, First Out)
// ============================================================

// Uma pilha empilha e desempilha como uma pilha de pratos.
const pilha = [];
pilha.push("prato 1");
pilha.push("prato 2");
pilha.push("prato 3");

console.log("👉 Pilha atual:", pilha);

console.log("Removendo o topo:", pilha.pop()); // prato 3
console.log("Pilha depois da remoção:", pilha);

// ============================================================
// 🔹 QUEUE – Fila (FIFO: First In, First Out)
// ============================================================

// Uma fila segue a ordem de chegada, como fila de banco.
const fila = [];
fila.push("cliente 1");
fila.push("cliente 2");
fila.push("cliente 3");

console.log("👉 Fila atual:", fila);

console.log("Atendendo:", fila.shift()); // cliente 1 (primeiro a entrar)
console.log("Fila após atendimento:", fila);

// ============================================================
