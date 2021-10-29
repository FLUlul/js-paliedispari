/* 
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/


/* 
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
}