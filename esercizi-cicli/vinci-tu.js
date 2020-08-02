/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
`use stric`
let lancioP1;
let lancioP2;
let sommaP1=0;
let sommaP2=0;
let N = Math.random()*(11-1)+1;
N = Math.floor(N)
console.log(`I giocatori lanciano il dado ${N} volte`);
for (i=1; i<=N; i++){
    lancioP1 = Math.random()*(7-1)+1;
    lancioP1 = Math.floor(lancioP1)
    sommaP1 += lancioP1                       //Genera la somma dei lanci del giocatore1
}console.log(`Il giocatore 1 ha totalizzato ${sommaP1}`);
for (i=1; i<=N; i++){
    lancioP2 = Math.random()*(7-1)+1;
    lancioP2 = Math.floor(lancioP2)
    sommaP2 += lancioP2                        //Genera la somma dei lanci del giocatore2
}console.log(`Il giocatore 2 ha totalizzato ${sommaP2}`);
if (sommaP1 == sommaP2) {
  console.log(`I due giocatori hanno pareggiato`);
}else if (sommaP1 > sommaP2){
  console.log(`Il giocatore 1 ha vinto con ${sommaP1}`);
}else if(sommaP2 > sommaP1){
  console.log(`Il giocatore 2 ha vinto con ${sommaP2}`);
}