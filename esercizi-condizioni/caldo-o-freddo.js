/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7, max, min, med1, med2, med3, med4, med5,
ö
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

if (e>max) {
  med3=max; max=e;
}else if (e<min) {
  med3=min; min=e;
}else {
  med3=e;
}

if (f>max) {
  med4=max; max=f;
}else if (f<min) {
  med4=min; min=f;
}else {
  med4=f;
}

if (g>max) {
  med5=max; max=g;
}else if (g<min) {
  med5=min; min=g;
}else {
  med5=g;
}

console.log(`La giornata piu´calda ha ${max} gradi, mentre la giornata piu´fredda ha ${min} gradi`);
