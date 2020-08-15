/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

`use strict`
let numbers = [];
let N = Math.round(Math.random()*20);
for (let i=0; i<N; i++){
  numbers[i] = Math.round(Math.random()*100);
};
console.log(numbers);
let reversed = numbers.reverse();
console.log(reversed);