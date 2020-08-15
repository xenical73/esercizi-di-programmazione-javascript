/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
var risposta = '';
var numeroDispari = 5;
if(numeroDispari %2 ==0) numeroDispari++;
var copiaNumeroDispari = numeroDispari;
	
	var i = 1; //i indica il numero di pallette
	while(numeroDispari > 0){
		var tab = Math.floor(numeroDispari/2);
		for(var k=0;k<tab;k++){
			risposta += '  ';//METTE LE TABULAZIONI DI INDENTAZIONE
		}
		var j = i; 
		while(j > 0){
			risposta += '*';
			j--;
		}
		risposta += '\n';
		i += 2;
		numeroDispari -= 2;
	}
	
	i = copiaNumeroDispari-2; //indica il numero di pallette da mettere
	numeroDispari = copiaNumeroDispari;
	tab = 1;
	while(numeroDispari > 0){
		
		for(k=0;k<tab;k++){	
			risposta += '  ';//METTE LE TABULAZIONI DI INDENTAZIONE
		}
		tab++;
		
		j = i;
		while(j > 0){
			risposta += '*';
			j--;
		}
		risposta += '\n';
		i -= 2;
		numeroDispari -= 2;
	}
	console.log(`${risposta}`);