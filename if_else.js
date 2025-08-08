// 3️⃣ Votação obrigatória
// Peça a idade de uma pessoa e informe:

// Se tem menos de 16: “Não vota”

// Se tem entre 16 e 17, ou maior de 65: “Voto facultativo”

// Se tem entre 18 e 65: “Voto obrigatório”

console.log("Vamos votar!")
let idad = readline.question("Quantos anos tem?")

if (idad < 16){
    console.log("Não vota!")
}
if (idad >= 16 && idad < 18 || idad > 65){
    console.log("Voco facultativo!")
} 
if (idad >=18 && idad < 65){
    console.log("Voto obrigatório!")
}


// 4️⃣ Número par ou múltiplo de 5
// Peça um número ao usuário e informe se ele é:

// Par

// Ímpar e múltiplo de 5

// Ou nenhuma das opções

let num = readline.question("Informe um número:")

if(num % 2 == 0){
    console.log(`O número ${num} é par!`)
} else if (num % 2 ==! 0 && num % 5 == 0){
    console.log(`O número é impar e divisivel por 5`)
} else {
    console.log("Nenhuma das opções")
}

// ✅ 5️⃣ Nota e conceito
// Peça a nota de um aluno:

// Se for maior ou igual a 9: “Excelente”

// Se for maior ou igual a 7: “Bom”

// Se for maior ou igual a 5: “Regular”

// Caso contrário: “Reprovado”

let nota = readline.question("Informe uma nota:")

if(nota >= 9){
    console.log("Exclente!")
}
if(nota >= 7 && nota < 9){
    console.log("Bom!")
}
if(nota >= 5){
    console.log("Regular")
} else {
    console.log("Reprovado!")
} 
