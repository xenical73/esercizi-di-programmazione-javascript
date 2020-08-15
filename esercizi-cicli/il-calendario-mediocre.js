/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/
`use strict`
let calendar = [];
calendar [0] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
calendar [1] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
calendar [2] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
calendar [3] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
calendar [4] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
calendar [5] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
calendar [6] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
calendar [7] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
calendar [8] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
calendar [9] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
calendar [10] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
calendar [11] = [1, 2, 3, 4 ,5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let months = `Novembre`;
if (months === `Gennaio`){
  console.log(`Il mese di Gennaio ha ` + calendar[0][30] + ` giorni`);
} else if (months === `Febbraio`){
  console.log(`Il mese di Febbraio ha ` + calendar[1][27] + ` giorni`);
} else if (months === `Marzo`){
  console.log(`Il mese di Marzo ha ` + calendar[2][30] + ` giorni`);
} else if (months === `Aprile`){
  console.log(`Il mese di Aprile ha ` + calendar[3][29] + ` giorni`);
} else if (months === `Maggio`){
  console.log(`Il mese di Maggio ha ` + calendar[4][30] + ` giorni`);
} else if (months === `Giugno`){
  console.log(`Il mese di Giugno ha ` + calendar[5][29] + ` giorni`);
} else if (months === `Luglio`){
  console.log(`Il mese di Luglio ha ` + calendar[6][30] + ` giorni`);
} else if (months === `Agosto`){
  console.log(`Il mese di Agosto ha ` + calendar[7][30] + ` giorni`);
} else if (months === `Settembre`){
  console.log(`Il mese di Settembre ha ` + calendar[8][29] + ` giorni`);
} else if (months === `Ottobre`){
  console.log(`Il mese di Ottobre ha ` + calendar[9][30] + ` giorni`);
} else if (months === `Novembre`){
  console.log(`Il mese di Novembre ha ` + calendar[10][29] + ` giorni`);
} else if (months === `Febbraio`){
  console.log(`Il mese di Dicembre ha ` + calendar[11][30] + ` giorni`);
};