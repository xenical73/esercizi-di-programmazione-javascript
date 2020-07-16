/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/
console.log(`SETTIMANA:
1. Lunedi
2. Martedì
3. Mercoledi
4. Giovedi
5. Venerdi
6. Sabato
7. Domenica`);

var day = "12"

switch (day) {
  case "1":
    console.log("Lunedi");
    break;
  case "2":
    console.log("Martedi");
    break;
  case "3":
    console.log("Mercoledi");
    break;
  case "4":
    console.log("Giovedi");
    break;
  case "5":
    console.log("Venerdi");
    break;
  case "6":
    console.log("Sabato");
    break;
  case "7":
    console.log("Domenica");
    break;
  default:
    console.log(`Spiacenti, Giorno della settimana non valido!`);
}
