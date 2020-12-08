console.log("Strings");

//Konkatenering

let fornamn = "Mahdi"
let efternamn = "Ahmadi"
let namn = fornamn + efternamn
let adress = "Kronhusgatan 9"
let telefon = 112
let alder = 19

/*
Namn: Mahdi Ahmadi
Ålder: 18 år
Adress: kronhusgatan 9
Telefon: 112
*/

console.log("namn: "+ namn +"\n" +"adress: " + adress +"\n" +"Telefon: "+ telefon +"\n" +"alder: " + alder);

// skriv ut motsvarande personuppgifter i webläsaren

let p_uppgifter = document.querySelector("#personuppgifter")

p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>" + "Telefon: " + telefon + "<br>" + "Ålder: " + alder

//indexering
//let alfabet = "abcdefghijklmnopqrstuvwxyzåäö" let bokstav1 = alfabet[0] let bokstav5 = alfabet[4] console.log(`bokstav på index 0 är: ${bokstav1}`); console.log(`bokstav på index 4 är: ${bokstav5}`);//

//längden av en sträng
//let antal_bokstaver = alfabet.length console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`);//

//slice

//sökning

//split

//loopa över en lista

let meningen = "Jag läser IT-programmet på NTI Kronhus i Göteborg";
let ord = meningen.split(" ");
console.log(ord);


