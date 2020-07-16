/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2


  http://www.imparareaprogrammare.it
*/
var a = 3, b = -1, c = 4, d = -2, max, min, med1, med2

if (a > b) {
  max=a; min=b;
}else {
  max=b; min=a;
}

if (c>max) {
  med1=max; max=c;
}else if (c<min) {
  med1=min; min=c;
}else {
  med1=c;
}
if (d>max) {
  med2=max; max=d;
}else if (d<min) {
  med2=min; min=d;
}else {
  med2=d;
}

console.log(`Il numero maggiore e´ ${max} e il numero minore e´ ${min}`);
