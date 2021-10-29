/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/* 
-creo un prompt per chiedere all'utente di scrivere pari o dispari ok
-creo un prompt per chiedere all'utente di scrivere un numero da 1 a 5 ok
-se l'utente inserisce un numero minore o maggiore gli richiedo il numero
-creo una funzione ok
    -creo una variabile che mi permette di creare un numero random da 1 a 5 ok
-creo una variabile che sommi il numero inserito dall'utente con quello generato dal pc ok
-creo una funzione
    -creo una variabile stringa = ""
    -se la variabile di somma e' divisibile per 2 resto 0
        -la variabile stringa = "pari"
    -altrimenti
        -la variabile stringa = "dispari"
-se la variabile stringa == prima variabile prompt utente
    -stampo ha vinto l'utente: il numero e' ${variabile stringa}
-altrimenti
    -stampo ha vinto il pc: il numero e' ${variabile stringa}
*/

const userString = prompt("Choose odd or even");
let userNum = parseInt(prompt("Choose a number from 1 to 5"));
let pcNum = randomNum(5);

while (userNum < 1 || userNum > 5){
    userNum = parseInt(prompt("Choose a number from 1 to 5, NOT MORE OR LESS!!!!"));
}

function randomNum (max){
    let pcNumFun= Math.floor(Math.random()* max +1);
    return pcNumFun;
}

const total = userNum + pcNum;

function oddEven(){
    let stringFun = "";
    if(total % 2 === 0){
        stringFun ="even";
    }else{
        stringFun ="odd";
    }
    return stringFun
}
let string = oddEven();
console.log(string);
console.log(pcNum);

if(string === userString){
    console.log(`User won the numer was : ${total} wich is ${string}` );
}else{
    console.log(`Pc won the numer was : ${total} wich is ${string}` );
}