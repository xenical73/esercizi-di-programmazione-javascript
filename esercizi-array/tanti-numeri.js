/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
`use strict`
let numbers = [];
let somma = 0
let media
let N = Math.round(Math.random()*20);;
for (let i=0; i<N; i++){
  numbers[i] = Math.round(Math.random()*100);
}
numbers.forEach(function (item, index, array) {
  somma += item;
});
media = somma/numbers.length; 
let filtered = numbers.filter(function (number){
  return number < media
});
console.log(numbers);
console.log(`La media e´ : ${media}; I numeri minori della media sono: ${filtered}`);
