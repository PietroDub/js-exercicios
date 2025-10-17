'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', data => input += data);
process.stdin.on('end', () => {
    const numeros = [1, 2, 3, 4, 5];
    const dobro = numeros.map(n => n * 2);
    console.log(dobro);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input1 = '';
process.stdin.on('data', data => input1 += data);
process.stdin.on('end', () => {
    const numeros = [10, 20, 30];
    const string = numeros.map(n => {
        n = `Número: ${n}`;
        return n;
    })
    console.log(string);
});


//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input2 = '';
process.stdin.on('data', data => input2 += data);
process.stdin.on('end', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const imparPar = numeros.map(n => (n % 2 === 0) ? n = "par" : n = "impar");
    console.log(imparPar);
});


//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input3 = '';
process.stdin.on('data', data => input3 += data);
process.stdin.on('end', () => {
    const numeros = [3, 6, 9];
    const num1 = numeros.map(n => n + 1);
    console.log(num1);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input4 = '';
process.stdin.on('data', data => input4 += data);
process.stdin.on('end', () => {
    const nomes = ["Ana", "Bruno", "Carla"];
    const nobjs = nomes.map(n => ({nome: n}));
    console.log(nobjs);
});



