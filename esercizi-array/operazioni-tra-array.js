/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/
`use strict`
let arrayRandom1 = [];
let N = 10
for (let i=0; i<N; i++){
    arrayRandom1[i] = Math.round(Math.random()*10+1);
};
let arrayRandom2 = [];
for (let j=0; j<N; j++){
    arrayRandom2[j] = Math.round(Math.random()*10+1);
};
//Addizione
let resultsA = arrayRandom1.map (function (number, index){
  return number + arrayRandom2[index];
}); 
console.log(`arrayRandom1 = ${arrayRandom1}; arrayRandom2 = ${arrayRandom2}; L\´ operazione e´= Addizione`);
console.log(resultsA);
//Sottrazione
let resultsS = arrayRandom1.map (function (number, index){
  return number - arrayRandom2[index];
}); 
console.log(`arrayRandom1 = ${arrayRandom1}; arrayRandom2 = ${arrayRandom2}; L\´ operazione e´= Sottrazione`);
console.log(resultsS);
//Moltiplicazione
let resultsX = arrayRandom1.map (function (number, index){
  return number * arrayRandom2[index];
}); 
console.log(`arrayRandom1 = ${arrayRandom1}; arrayRandom2 = ${arrayRandom2}; L\´ operazione e´= Moltiplicazione`);
console.log(resultsX);
//Divisione
let resultsD = arrayRandom1.map (function (number, index){
  return number / arrayRandom2[index];
}); 
console.log(`arrayRandom1 = ${arrayRandom1}; arrayRandom2 = ${arrayRandom2}; L\´ operazione e´= Divisione`);
console.log(resultsD);