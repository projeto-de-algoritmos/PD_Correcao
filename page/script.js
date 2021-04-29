
function totalCI(principle, rate, time) {
    let prestacao = Array(time);
    for(let i = 1; i <= time; i++)
    prestacao[i-1] = cupoundInterest(principle, rate, i);
    return prestacao;
}

// CI = P*(1+R/100)^T
function cupoundInterest(principle, rate, time) {
    return principle * Math.pow((1 + rate/100), time); // IMPORTANTE: Math.pow() usa recursao <[ x * [ x * [ x ] ] ]>
}

function memorizationCompoundInterest(primeira, taxa, tempo) {
    let prestacao = Array(tempo);
    prestacao[0] = primeira*(1+ taxa/100);
    for(let i = 1; i < tempo; i++) {
        prestacao[i] = prestacao[i-1]*(1+ taxa/100);
    }
    return prestacao;
}

let first = 1200;
let rate = 0.1;
let time = 2;
let cicles = 100;
let a, b;

for(let i = 0; i < cicles; i++){
    console.time('Juros Composto Total');
    a = totalCI(first, rate, time);
    console.timeEnd('Juros Composto Total');

}

for(let i = 0; i < cicles; i++){
    console.time('Juros Composto Total com Memorization');
    b = memorizationCompoundInterest(first, rate, time);
    console.timeEnd('Juros Composto Total com Memorization');

}

console.log('Juros Composto do ultimo dia: '+ a[a.length-1]);
console.log('Juros Composto com Memorization do ultimo dia: ' + b[b.length-1]);