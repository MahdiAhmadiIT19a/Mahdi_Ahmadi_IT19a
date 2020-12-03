console.log("hej");

let slumptal = Math.random()
console.log(slumptal);

let coinflip = Math.round(slumptal)
console.log(`Coin flip: ${coinflip}`)

/* utöka det här programmet sådant att
en 0 skriver ut tails
en 1 skriver ut head
*/

if (coinflip == 1){
    console.log("Head")
} else{
    console.log("Tails")
}

let sexor = 0

for (let i = 0; i < 100; i++){
    let tärning = Math.floor(Math.random() * 6) +1
    console.log(`Tärningen: ${tärning}`)

    if (tärning == 6) {
        sexor++;
    }
}

console.log(`Antalet sexor är ${sexor}`);

let andel = sexor/100
console.log(andel);
console.log(`Teoretisk sannolikhet ${1/6}`);