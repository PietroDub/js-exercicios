//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', data => input += data);
process.stdin.on('end', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const pares = numeros.filter(n => (n % 2 === 0));
    console.log(pares);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input2 = '';
process.stdin.on('data', data => input2 += data);
process.stdin.on('end', () => {
    const numeros = [4, 12, 9, 25, 7, 18];
    const maiorque10 = numeros.filter(n => (n > 10));
    console.log(maiorque10);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input3 = '';
process.stdin.on('data', data => input3 += data);
process.stdin.on('end', () => {
    const nomes = ["Ana", "Bruno", "Lu", "Carla", "João"];
    const maiorq4 = nomes.filter(n => (n.length > 4));
    console.log(maiorq4);
});


//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input4 = '';
process.stdin.on('data', data => input4 += data);
process.stdin.on('end', () => {
    const produtos = [
        { nome: "Celular", promocao: true },
        { nome: "Notebook", promocao: false },
        { nome: "Fone", promocao: true }
    ]
    const promo = produtos.filter(produto => produto.promocao === true);
    console.log(promo);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input5 = '';
process.stdin.on('data', data => input5 += data);
process.stdin.on('end', () => {
    const numeros = [-3, 7, -1, 0, 5, -10];
    const negativos = numeros.filter(n => (n < 0));
    console.log(negativos);
});
