console.log("hej detta är if_sats.lektion2")

/* skriv en programm som låter användaren mata in sin ålder. Programmet ska avgöra om personen får kolla på en 15-årsgräns film på bio */

/* Utöka programmet till kolla om användaren får titta på en 7-årsgräns film på bio */

/* Utöka programmet till kolla om användaren får titta på en 18-årsgräns film på bio */

 
let num = prompt("Hur många gånger reser du i en månad?")

let pris = 30*num
if (pris >= 775) {
    console.log("Det är nog bättre om du skaffar en månadskort som ligger på 775kr")
} else  {
    console.log(` Det kommer att kosta ${pris} och du behöver inte en månadskort`)
}

// Uppgift
/* en enkelbiljet: 30kr
   en månadskort: 775kr
   Fråga hur många gånger användaren åker spårvagn och avgör om det är värt att köpa månadskort eller inte. */