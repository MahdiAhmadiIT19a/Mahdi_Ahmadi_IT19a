console.log("Välkommen till SAS")


let vikt = prompt("hur mycket väger handbaggaget? (kg)")

if (vikt <= 8 ) {
    console.log("Vikten är okej!")
} else {
    console.log("Error! sänk på vikten.")
}

let längd = prompt("Ange längden på baggaget (cm)")
let bredd = prompt("Ange bredden på baggaget (cm)")
let höjd = prompt("Ange höjden på baggaget (cm)")

if (vikt <=8 && längd <= 55 && bredd <= 40 && höjd <= 23){
    console.log("Vikten och dimentionen är okej!")
} else {
    console.log("Error! handbaggaget är förstort eller förtungt och måste lämnas in!")
}