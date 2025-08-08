var readline = require("readline-sync")

// 1️⃣ Digitar até acertar a senha
// Peça ao usuário uma senha. Enquanto ela for diferente de "1234", continue pedindo.
// Quando acertar, exiba: "Acesso liberado".
let senha = 1

do{
  senha = readline.question("Digite a senha correta:")
} while (senha != 1234)

// 2️⃣ Menu interativo
// Mostre um menu com 3 opções:

// Ver perfil

// Editar perfil

// Sair
// Peça uma opção e continue mostrando o menu até que o usuário escolha 3 (sair).

do{
console.log("1- Ver perfil")
console.log("2- Editar perfil")
console.log("3- Sair")

choice = readline.question("Escolha:")

switch(choice){
    case 1:
    console.log("Perfil acessado!")
    break;
    case 2:
    console.log("Editar Perfil")
    break;
    case 3:
    console.log("Saindo...")
    break;
    default:
    console.log("Não pode!")
    break;
}
} while (choice != 3)

// 3️⃣ Confirmar decisão
// Pergunte ao usuário: "Deseja continuar? (s/n)"
// Continue perguntando enquanto a resposta for diferente de "n".
// Quando ele digitar "n", exiba: "Encerrado com sucesso."

do{
    keep = readline.question("Deseja continuar (S/N)")
}  while (keep =! "N")

// 4️⃣ Somar vários números
// Peça números ao usuário e vá somando.
// Continue até ele digitar um número negativo.
// No final, exiba a soma total dos números positivos digitados.

let soma = 0
let total = 0

do{
    soma = readline.question("Digite um número para a soma:")

   if (soma > 0){
     total = total + soma
   }

} while (soma < 0)

// 5️⃣ Contar quantas tentativas até acertar
// Escolha um número secreto (ex: 7).
// O usuário deve tentar adivinhar.
// Conte quantas tentativas ele levou para acertar e mostre no final.

let secreto =  8
let num = 0

console.log("Advinhe o número:")
do{
    num = readline.question("Digite um núero:")
} while(num =! secreto)