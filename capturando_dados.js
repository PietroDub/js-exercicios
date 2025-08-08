var readline = require("readline-sync")
var nome = readline.question("Qual seu nome?")

console.log(`O nome é: ${nome}`)

var nota1 = readline.question("Digite sua primeira nota:")
var nota2 = readline.question("Agora a segunda nota:")

media = (nota1 + nota2) / 2
console.log(`A média do aluno é: ${media}`)