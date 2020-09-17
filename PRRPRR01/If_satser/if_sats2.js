console.log("hej detta är if_sats.lektion2")

// Uppgift
/* en enkelbiljet: 30kr
   en månadskort: 775kr
   Fråga hur många gånger användaren åker spårvagn och avgör om det är värt att köpa månadskort eller inte. */


let num = prompt("Hur många gånger reser du i en månad?")

let pris = 30*num
if (pris >= 775) {
    console.log("Det är nog bättre om du skaffar en månadskort som ligger på 775kr")
} else  {
    console.log(` Det kommer att kosta ${pris} och du behöver inte en månadskort`)
}
