/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
var player1 = 15;
var player2 = 67;
var random = Math.random()*(100-1)+1;
random = Math.floor(random)
difPlayer1=Math.abs(player1-random); //Calcola la differenza in termini assoluti 6
difPlayer2=Math.abs(player2-random);
console.log(`Numero casuale generato = ${random}`);

if (player1==random && player2==random) {
  console.log(`Entambi i giocatori hanno vinto con ${random}`);
 }else if (player1==random) {
  console.log(`Il giocatore 1 ha vinto con ${random}`);
}else if (player2==random) {
  console.log(`Il giocatore 2 ha vinto con ${random}`);
}else if (difPlayer1>difPlayer2) {
  console.log(`Il giocatore 2 si è avvicinato di più con ${player2}`);
}else if (difPlayer2>difPlayer1) {
  console.log(`Il giocatore 1 si è avvicinato di più con ${player1}`);
}
