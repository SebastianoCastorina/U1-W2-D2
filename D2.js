/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 10
const numero2 = 20
if (numero1 > numero2) { 
  console.log ("Numero 1 è maggiore")
}
else {
  console.log("Numero 2 è maggiore")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numero1 !== 5) {
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numero1 % 5 === 0) 
{
  console.log("Divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const numero3 = 12
const numero4 = 4
if (numero3 - numero4 === 8 || numero3 + numero4 === 8)

{
console.log("la sottrazione è uguale a 8")
}
else if(numero3 || numero4 === 8)
{
  console.log("Uno dei due numeri è uguale a 8")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40
let shipping = 10
if (totalShoppingCart > 50) {
  console.log("La spedizione è gratuita", totalShoppingCart )
}
else { console.log( "La spedizione te la paghi tutta", totalShoppingCart + shipping)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let blacFriday=totalShoppingCart-(totalShoppingCart * 20/100)

if (blacFriday > 50) {
  console.log('La spedizione è gratuita', blacFriday )
}
else { console.log( "La spedizione te la paghi tutta", blacFriday + shipping)
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let pino = 10
let romeo = 3
let giulietta = 6

if ( pino>romeo && romeo>giulietta ) {console.log(pino, romeo, giulietta )

}
else if (pino>giulietta && giulietta > romeo) {console.log( pino, giulietta,romeo)}
else if(romeo>pino && pino >giulietta){console.log(romeo,pino,giulietta)}
else if (romeo>giulietta && giulietta>pino) {console.log(romeo,giulietta,pino)}
else if (giulietta>pino && pino>romeo) {console.log(giulietta, pino,romeo)}
else if(giulietta>romeo && rome> pino) {console.log(pino,giulietta,romeo)}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof pino)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (pino % 2 === 0) {
  console.log("il numero è pari")
}
else (console.log("è dispari"))
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */



/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (val < 10 && val >= 5 ) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city="Toronto"
console.log("John", me
)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log("John", me
)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop(2)
console.log("array", me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let myArray = []
myArray.push (1)
myArray.push (2)
myArray.push (3)
myArray.push (4)
myArray.push (5)
myArray.push (6)
myArray.push (7)
myArray.push (8)
myArray.push (9)
myArray.push (10)
console.log("il mio array", myArray)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray.splice(9)
myArray.push(100)
console.log("il mio nuovo array", myArray)