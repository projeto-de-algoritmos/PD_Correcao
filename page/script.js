
// fc_0 sum(j = 1 : n) of fc_j/(1 + i)^j
function taxaRetorno(prt, rate, time){
    let realValue = Array(time);
    for(let i = 1; i <= time; i++){
        realValue[i-1] = prt/ Math.pow(1 + rate, i); // pow e recusiva
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


// 100000 parcelas de 200 reais cada, com um taxa de juros composto de 1% intrinseco a cada parcela
let parcelas = 200;
let taxa = 0.01;
let tempo = 100000;
let a, b;
let totalA = 0, totalB = 0;


// primeiras iteracoes descartadas pois o sistema operacional ainda nao otimizou o uso da memoria
for(let i = 0; i < 5; i++){
    a = taxaRetorno(parcelas, taxa, tempo);
}

console.time('5 iterações de Taxa de Retorno');
for(let i = 0; i < 5; i++){
    a = taxaRetorno(parcelas, taxa, tempo);
}
console.timeEnd('5 iterações de Taxa de Retorno');

console.time('10 iterações de Taxa de Retorno');
for(let i = 0; i < 10; i++){
    a = taxaRetorno(parcelas, taxa, tempo);
}
console.timeEnd('10 iterações de Taxa de Retorno');

console.time('20 iterações de Taxa de Retorno');
for(let i = 0; i < 20; i++){
    a = taxaRetorno(parcelas, taxa, tempo);
}
console.timeEnd('20 iterações de Taxa de Retorno');

// primeiras iteracoes descartadas pois o sistema operacional ainda nao otimizou o uso da memoria
for(let i = 0; i < 5; i++){
    b = memorizationTaxaRetorno(parcelas, taxa, tempo);
}

console.time('5 iterações de Taxa de Retorno com Memorization');
for(let i = 0; i < 5; i++){
    b = memorizationTaxaRetorno(parcelas, taxa, tempo);
}
console.timeEnd('5 iterações de Taxa de Retorno com Memorization');

console.time('10 iterações de Taxa de Retorno com Memorization');
for(let i = 0; i < 10; i++){
    b = memorizationTaxaRetorno(parcelas, taxa, tempo);
}
console.timeEnd('10 iterações de Taxa de Retorno com Memorization');

console.time('20 iterações de Taxa de Retorno com Memorization');
for(let i = 0; i < 20; i++){
    b = memorizationTaxaRetorno(parcelas, taxa, tempo);
}
console.timeEnd('20 iterações de Taxa de Retorno com Memorization');

a.forEach((x) => {totalA += x});
b.forEach((x) => {totalB += x});

console.log('Valor real:');
console.log('R$ ' + totalA.toFixed(2))
console.log('Valor real com Memorization:');
console.log('R$ ' + totalB.toFixed(2))
console.log('Valor final:');
console.log('R$ ' + (parcelas*tempo).toFixed(2))
