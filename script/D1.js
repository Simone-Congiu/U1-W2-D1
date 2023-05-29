/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

// String= è una parola o una lettera  
 let myNameIs="Simone"
 console.log("spiegazione string"+" "+myNameIs)

// number=  è un numero ex. 
let numberEx = 5
console.log("spiegazione number"+" "+ numberEx)

// boolean= la variabile è una condizione (vera o falsa)   
  let exN1=5
  let exN2=10  
  let exN3=5<10 //risultato true.
  let exN4=5>10  //risultato false.

  console.log("spiegazione boolean"+ " " + exN3)
  console.log("spiegazione boolean"+" "+ exN4)


// undefinited = la variabile non è definita  ex.  let myName =

// null = la variabile è vuota   ex. let=null

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName="Simone"
console.log("creato variabile di nome=myName e assegnato stringa con il mio nome="+" "+myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1= 12
let n2= 20
let n3= n1+n2
console.log("somma dei numeri 12 e 20 ="+" "+n3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x= 12
console.log("creazione variabile x con valore="+" "+x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName= "congiu"
console.log("riassegnazione valore variabile myName ="+" "+myName)
const number=2
//number=4 da errore perche a un const non puo cambiare dopo essere assegnato.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let z= 4
let y=(x-z)
console.log("sottrazione tra variabile x e 4"+" "+y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1="john"
let name2="John"
console.log(name1===name2)

let result = name2.toLowerCase(name2)
console.log("diventata minuscola la lettera J del nome John = "+" "+result)

console.log(result===name1)
