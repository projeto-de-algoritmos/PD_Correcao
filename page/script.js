// fc_0 sum(j = 1 : n) of fc_j/(1 + i)^j
function taxaRetorno(prt, rate, time){
    let realValue = Array(time);
    for(let i = 1; i <= time; i++){
        realValue[i-1] = prt/ Math.pow(1 + rate, i);
    }
    return realValue;
}

function memorizationTaxaRetorno(prt, rate, time){
    let realValue = Array(time);
    realValue[0] = prt/(1 + rate);
    for(let i = 1; i < time; i++) {
        realValue[i] = realValue[i-1]/(1 + rate);
    }
    return realValue;
}

let parcelas = 200;
let taxa = 0.01;
let tempo = 100000;
let ciclos = 10;
let a, b;
let totalA = 0, totalB = 0;

for(let i = 0; i < ciclos; i++){
    console.time('Taxa de Retorno');
    a = taxaRetorno(parcelas, taxa, tempo);
    console.timeEnd('Taxa de Retorno');
}

for(let i = 0; i < ciclos; i++){
    console.time('Taxa de Retorno com Memorization');
    b = memorizationTaxaRetorno(parcelas, taxa, tempo);
    console.timeEnd('Taxa de Retorno com Memorization');
}


a.forEach((x) => {totalA += x});
b.forEach((x) => {totalB += x});

// console.log(a)
console.log('Valor real:');
// console.log(a)
console.log(totalA)
console.log('Valor real com Memorization:');
// console.log(b)
console.log(totalB)
console.log('Valor final:');
console.log(parcelas*tempo)