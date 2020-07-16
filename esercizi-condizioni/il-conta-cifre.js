/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var num = 6485546546
num=num.toString()

if (num.length == 1) {
  console.log(`Il numero ha 1 cifra`);
}else if (num.length == 2) {
  console.log(`Il numero ha 2 cifre`);
}else if (num.length == 3) {
  console.log(`Il numero ha 3 cifre`);
}else if (num.length == 4) {
  console.log(`Il numero ha 4 cifre`);
}else {
  console.log(`Il numero e troppo grande`);
}
