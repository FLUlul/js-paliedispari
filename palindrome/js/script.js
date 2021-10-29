/* 
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/


/* 
    VERSIONE CON FUNZIONI GIA ESISTENTI
-creo una variabile con un prompt per la parola che inserisce l'utente
-creo una funzione che mi permetta di invertire la parola inserita dall'utente
    -divido la parola in lettere stringhe (array) con il comando .split("")
    -vado a invertire la direzione dell'array di lettere da => a <=
    -vado a ricompattare tutte le lettere in una stringa parola
-creo una variabile che mi salvi la funzione reverse
-confronto la parola inserita dall'utente con la parola inserita dall'utente "lavorata" dalla funzione
    -se la parola inserita dall'utente e' uguale a quella invertita
        -stampo che la parola e' palindroma
    -altrimenti
        -stampo che la parola non e' palindroma
*/

/* 
    VERSIONE CON CICLO WHILE
-creo una variabile con un prompt per la parola che inserisce l'utente
-creo la variabile che conterra' la lettera specifica della parola nel ciclo
-creo la variabile che conterra' l'insieme delle lettere nel ciclo
-creo la funzione che mi permette di richiamarla quando mi serve
    -creo una variabile della lunghezza della parola - 1
    -creo un ciclo che mi permette di invertire la direzione della parola//-finche' la lunghezza della parola-1 e' maggiore o uguale a 0 continui a ciclare
        -la variabile della lettera e' assegnata con l'indice ultimo della parola fornita es. ciao.lenght=4, [c] [i] [a] [o]       [0] [1] [2] [3], ecco perche usiamo il -1 alla lunghezza della parola
        -assegnamo alla variabile che contiene l'insieme delle lettere, il contenuto di se stessa + la lettera
        -decremento il conteggio dell'indice per andare indietro
-se la parola inserita dall'utente e' uguale alla variabile che contiene le lettere al contrario
    -stampo la parola e' palindroma
-altrimenti
    -stampo non e' palindroma   
*/

let userWord = prompt("Insert the word you need to check if it's a palindrome:");
let letter= "";
let reversed ="";

function reverse (word){

    let i = word.length - 1;

    while (i >= 0) {
        letter = word[i];
        reversed += letter;
        console.log(reversed);
        i--;
    }
    return reversed
}
reverse (userWord);
if(userWord == reversed){
    console.log("This is a palindrome!!!!");
}else{
    console.log("Nope, this is not a palindrome");
}





/* 
let word= prompt("Insert the word you need to check if it's a palindrome:");
let reversed = reverse (word);

function reverse (wordRev){

    let split = wordRev.split(""); //questo mi permette di dividere la parola in stringhe di lettere

    let reverse = split.reverse();//questo mi permette di invertire la direzione dell'array di lettere stringate

    let join = reverse.join(""); //questo mi permette di ricompattare le lettere stringhe in un'unica parola stringata

    return join;
}
console.log(word);
console.log(reversed);



if(word == reversed){
    console.log("This is a palindrome!!!!");
}else{
    console.log("Nope, this is not a palindrome");
} */