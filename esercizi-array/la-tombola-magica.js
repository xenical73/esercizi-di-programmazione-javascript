/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
`use strict`
let numbersRandom = [];
let N = 10;
let counter = 0
for (let i=0; i<N; i++){
  numbersRandom[i] = Math.round(Math.random()*90+1);
};
let numbersPersonal = [4, 18, 29, 35, 49, 56, 67, 78, 83, 89];
let results = numbersPersonal.filter (value => numbersRandom.includes(value));
console.log(`I numeri estratti sono ${numbersRandom};`);
console.log(`I miei numeri sono ${numbersPersonal};`);
console.log(results); 
for (let j = 0; j<results.length; j++){
    counter += 1
};
if (counter === 2){
  console.log(`Complimenti hai fatto Ambo`);
}
else if (counter === 3){
  console.log(`Complimenti hai fatto Terno`);
}
else if (counter === 4){
  console.log(`Complimenti hai fatto Quaterna`);
}
else if (counter === 5){
  console.log(`Complimenti hai fatto Cinquina`);
}
else if (counter === N){
  console.log(`Complimenti hai fatto Tombola`);
}
else if (counter === 0 || 1){
  console.log(`Mi spiace, hai perso!`);
};
