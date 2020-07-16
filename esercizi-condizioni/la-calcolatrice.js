/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
console.log(`OPERAZIONI:
1. Somma
2. Sottrazione
3. Moltiplicazione
4. Divisione
5. Modulo
6. Potenza
7. Media`);

var num1 = 5, num2 = 6;
somma = (num1+num2);
sottrazione = (num1-num2);
moltiplicazione = (num1*num2);
divisione = (num1/num2);
modulo = (num1%num2)
potenza = Math.pow(num1, num2)
media = (num1+num2)/2;

operazione = "9"

switch (operazione) {
  case "1":
    console.log(`La somma e´ ${somma}`);
    break;
  case "2":
    console.log(`La sottrazione e´ ${sottrazione}`);
    break;
  case "3":
    console.log(`La moltiplicazione e´ ${moltiplicazione}`);
    break;
  case "4":
    console.log(`La divisione e´ ${divisione}`);
    break;
  case "5":
    console.log(`Il modulo e´ ${modulo}`);
    break;
  case "6":
    console.log(`La potenza e´ ${potenza}`);
    break;
  case "7":
    console.log(`La media e´ ${media}`);
    break;
  default:
    console.log(`Spiacenti, l´operazione selezionata non e´ valida!`);
}
