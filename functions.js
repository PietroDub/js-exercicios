// 🧠 GUIA COMPLETO – Funções e Métodos Importantes no HackerRank (JavaScript)

// 🧩 1️⃣ Manipulação de Strings

// 🔹 .split()
// Divide uma string em partes e retorna um array.
const texto1 = "banana maçã pera";
const frutas1 = texto1.split(" "); // separa pelo espaço
console.log(frutas1); // ['banana', 'maçã', 'pera']

// 🔹 .trim()
// Remove espaços extras no início e no final da string.
const nome1 = "   Pietro  ";
console.log(nome1.trim()); // 'Pietro'

// 🔹 .toUpperCase() / .toLowerCase()
// Converte letras para maiúsculas ou minúsculas.
const nome2 = "pietro";
console.log(nome2.toUpperCase()); // 'PIETRO'

// 🔹 .includes()
// Verifica se a string contém uma sequência específica.
const frase1 = "eu gosto de pizza";
console.log(frase1.includes("pizza")); // true

// 🔹 .replace()
// Substitui parte de uma string por outra.
const frase2 = "Eu gosto de maçã";
console.log(frase2.replace("maçã", "banana")); // 'Eu gosto de banana'

// 🔹 .charAt() / .slice() / .substring()
// Pegam partes específicas da string.
const palavra1 = "HackerRank";
console.log(palavra1.charAt(0)); // 'H'
console.log(palavra1.slice(0, 6)); // 'Hacker'

// 🧮 2️⃣ Manipulação de Arrays

// 🔹 .map()
// Cria um novo array com base em uma transformação.
const numeros1 = [1, 2, 3];
const dobro1 = numeros1.map(n => n * 2);
console.log(dobro1); // [2, 4, 6]

// 🔹 .filter()
// Cria um novo array com itens que passam por uma condição.
const numeros2 = [1, 2, 3, 4];
const pares2 = numeros2.filter(n => n % 2 === 0);
console.log(pares2); // [2, 4]

// 🔹 .reduce()
// Combina os valores do array em um único resultado.
const numeros3 = [1, 2, 3, 4];
const soma3 = numeros3.reduce((acc, n) => acc + n, 0);
console.log(soma3); // 10

// 🔹 .forEach()
// Executa uma função para cada elemento, mas não retorna nada.
const frutas2 = ['maçã', 'banana', 'pera'];
frutas2.forEach(f => console.log(f));

// 🔹 .find() / .findIndex()
// Procura o primeiro elemento que satisfaz uma condição.
const numeros4 = [3, 7, 10, 15];
console.log(numeros4.find(n => n > 8)); // 10
console.log(numeros4.findIndex(n => n > 8)); // 2

// 🔹 .sort()
// Ordena um array.
const nums5 = [10, 1, 20, 3];
nums5.sort((a, b) => a - b);
console.log(nums5); // [1, 3, 10, 20]

// 🔹 .join()
// Transforma um array em uma string.
const letras1 = ['A', 'B', 'C'];
console.log(letras1.join('-')); // 'A-B-C'

// 🔹 .every() / .some()
// Verifica se todos ou alguns elementos passam no teste.
const numeros5 = [2, 4, 6];
console.log(numeros5.every(n => n % 2 === 0)); // true
console.log(numeros5.some(n => n > 5)); // true

// 🧮 3️⃣ Objeto Math – Operações Numéricas
console.log(Math.max(3, 10, 5));   // 10
console.log(Math.min(3, 10, 5));   // 3
console.log(Math.pow(2, 3));       // 8
console.log(Math.sqrt(16));        // 4
console.log(Math.abs(-9));         // 9
console.log(Math.floor(4.7));      // 4
console.log(Math.ceil(4.1));       // 5
console.log(Math.round(4.5));      // 5
console.log(Math.random());        // número aleatório entre 0 e 1

// 📚 4️⃣ Métodos de Objetos e Utilitários

// 🔹 Object.keys(), Object.values(), Object.entries()
// Pega informações das chaves e valores.
const produto1 = { nome: "Celular", preco: 2000 };
console.log(Object.keys(produto1));   // ['nome', 'preco']
console.log(Object.values(produto1)); // ['Celular', 2000]
console.log(Object.entries(produto1)); // [['nome', 'Celular'], ['preco', 2000]]

// 🔹 JSON.stringify() / JSON.parse()
// Transforma objeto em string e vice-versa.
const obj1 = { nome: "Ana" };
const texto2 = JSON.stringify(obj1); // '{"nome":"Ana"}'
const novoObj2 = JSON.parse(texto2); // { nome: 'Ana' }
console.log(novoObj2);

// ⏱️ 5️⃣ Trabalhando com números e tempos
const numero6 = 123.4567;
console.log(numero6.toFixed(2)); // '123.46'
console.log(numero6.toPrecision(4)); // '123.5'
console.log(Number("42")); // 42
console.log(parseInt("10.5")); // 10
console.log(parseFloat("10.5")); // 10.5
