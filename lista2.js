// 🧠 Exercícios com SET

// 1️⃣ Crie um conjunto com os números [1, 2, 2, 3, 4, 4, 5] e exiba apenas os valores únicos.

const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosSemDuplicar = new Set(numeros);
console.log(numerosSemDuplicar);
const numUnico = [...numerosSemDuplicar];

// 4️⃣ Converta um Set de números em um array novamente usando o operador spread [...set].


// 2️⃣ Adicione os nomes "Ana", "Carlos" e "Beatriz" em um Set e verifique se "Carlos" existe nele.

const nomes = ["Ana", "Carlos", "Beatriz"];
console.log(`Existe o nome carlos? ${nomes.has("Carlos")}`);

// 3️⃣ Remova o valor 3 de um Set e mostre o resultado final no console.
const numeros1 = [1, 2, 3, 4];
const sem3 = numeros1.delete(3);
console.log(sem3);

// 5️⃣ Dado um array de emails com duplicatas, use Set para gerar uma lista de emails únicos.

const emails = [
  "ana@email.com",
  "carlos@email.com",
  "ana@email.com",
  "beatriz@email.com",
  "joao@email.com",
  "carlos@email.com",
  "lucas@email.com"
];
const emailUnico = new Set(emails);
console.log(emailUnico);


// 🧠 Exercícios com MAP

// 1️⃣ Crie um Map chamado 'alunos' com pares: ("Ana", 8.5), ("Carlos", 9), ("Beatriz", 7.5) e exiba a nota da Ana.
const alunos = new Map();
alunos.set("Ana", 8.5);
alunos.set("Carlos", 9);
alunos.set("Beatriz", 7.5);
console.log(alunos.get("Ana"));

// 2️⃣ Verifique se o aluno "João" existe no Map e adicione-o com a nota 10 se não existir.

function verifica(aluno){
    if(alunos.has(aluno)){
        console.log(alunos.get(aluno));
    } else{
        alunos.set(aluno, 10);
    }
}

verifica("João");

// 3️⃣ Some todas as notas armazenadas no Map e exiba a média final dos alunos.
let acumulado = 0;
for (const [aluno, notas] of alunos) {
    acumulado += notas;
};
console.log(`Média: ${acumulado / alunos.size}`);

// 4️⃣ Liste todos os alunos e suas notas usando um for...of.

for (const [aluno, nota] of alunos) {
  console.log(`${aluno}, Nota: ${nota}`);
}

// 5️⃣ Crie um Map que conte quantas vezes cada fruta aparece em um array como ["maçã", "banana", "maçã", "uva", "banana"].

// Array de frutas com repetições
const frutas = ["maçã", "banana", "maçã", "uva", "banana"];
// Criamos um Map para armazenar a contagem
const contagem = new Map();

// Percorremos cada fruta do array
for (let fruta of frutas) {
  // Se a fruta já estiver no Map, aumenta o contador em 1
  if (contagem.has(fruta)) {
    contagem.set(fruta, contagem.get(fruta) + 1);
  } 
  // Caso contrário, adiciona a fruta com valor inicial 1
  else {
    contagem.set(fruta, 1);
  }
}

// Exibindo o resultado completo
console.log(contagem);
// Exibindo de forma mais legível
for (let [fruta, qtd] of contagem.entries()) {
  console.log(`${fruta}: ${qtd}`);
}

// 🧠 Exercícios com OBJECT

// 1️⃣ Crie um objeto pessoa com propriedades nome, idade e cidade. Exiba apenas o valor de cidade.
const pessoa = {nome: "Pedro", idade: 20, cidade: "São Paulo"};
console.log(pessoa.cidade);

// 2️⃣ Adicione uma nova propriedade profissão ao objeto e exiba o objeto completo.
pessoa.profissão = "Técnico";

for(const[chave, valor] of Object.entries(pessoa)){
    console.log(`${chave}: ${valor}`);
}

// 3️⃣ Liste todas as chaves e valores do objeto usando Object.entries().
for(const[chave, valor] of Object.entries(pessoa)){
    console.log(`${chave}: ${valor}`);
}

// 4️⃣ Crie um objeto com produtos e seus preços. Exiba o preço médio dos produtos.
const produtos = [
    {produto: "Banana", preco: 10.0},
    {produto: "Arroz", preco: 20.0},
    {produto: "Batata", preco: 15.0}
]
let media = 0;
for(let i = 0; i < produtos.length; i++){
    media += produtos[i].preco;
}
media = media / (produtos.length--);
console.log(`A média de preço é ${media}`);
;

const palavra = 'banana';
const obj = {}; // objeto vazio que vai armazenar as contagens

function letra(palavra) {
  for (let i = 0; i < palavra.length; i++) {
    const letraAtual = palavra.charAt(i); // pega a letra na posição i

    // Se a letra já existe no objeto, soma 1
    if (obj[letraAtual]) {
      obj[letraAtual]++;
    } 
    // Se não existe ainda, cria e começa com 1
    else {
      obj[letraAtual] = 1;
    }
  }

  return obj;
}

console.log(letra(palavra)); // { b: 1, a: 3, n: 2 }