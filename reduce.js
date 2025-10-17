//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input4 = '';
process.stdin.on('data', data => input4 += data);
process.stdin.on('end', () => {
    const array = [1, 2, 3, 4, 5];
    const soma = array.reduce((acumulador, n) => acumulador + n, 0);
    console.log(soma);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', data => input += data);
process.stdin.on('end', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const somaPar = array.reduce((acumulador, n) => (n % 2 === 0 ? acumulador+= n : acumulador+= 0), 0);
    console.log(somaPar);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input1 = '';
process.stdin.on('data', data => input1 += data);
process.stdin.on('end', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const somaPar = array.reduce((acumulador, n) => (n % 2 === 0 ? acumulador+= n : acumulador+= 0), 0);
    console.log(somaPar);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input2 = '';
process.stdin.on('data', data => input2 += data);
process.stdin.on('end', () => {
    const nomes = ["Ana", "Bruno", "Carla"];
    const concatenando = nomes.reduce((acumulador, nome) => acumulador + '' + nome, 0);
    console.log(concatenando);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input3 = '';
process.stdin.on('data', data => input3 += data);
process.stdin.on('end', () => {
    const Produtos = [
        { nome: "Celular", quantidade: 3 },
        { nome: "Fone", quantidade: 5 },
        { nome: "Notebook", quantidade: 2 }
    ]

    const totalitens = Produtos.reduce((acumulador, produto) => (acumulador += produto.quantidade), 0);
    console.log(totalitens);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input5 = '';
process.stdin.on('data', data => input5 += data);
process.stdin.on('end', () => {
    
    const numeros = [8, 3, 12, 5, 9];
    const maior = numeros.reduce((acumulador, num) => (num > acumulador ? acumulador = num : acumulador = acumulador), 0);
    console.log(maior);
});

