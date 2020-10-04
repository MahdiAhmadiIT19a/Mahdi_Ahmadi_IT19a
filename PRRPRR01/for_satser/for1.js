// repeat genom for_satsen.

for (let i=1 ; i<=10 ; i++) {
console.log (`${i}.harrr harr har ha!`)
}
let p_talserie1 = document.querySelector("#talserie1")
let p_klass = document.querySelector("#klasslista")

for (let i=0 ; i<=10 ;i++) {
p_talserie1.innerHTML += `${i}.hej från JS <br/>`
}

let p_summa = document.querySelector("#summa")
p_summa.innerHTML += `1+2+3+...+9+10 = ${summa}`

// skapa en lista med elever


let elev = ["kokchun", "Henrik", "Thomas", "Tatiana", "Zsofia", "David"]

p_klass.innerHTML = "klassIT19a innehåller följande elever: <br/>"

console.log(elev.length)

for (let k = 0; k < elev.length; k++){
    p_klass.innerHTML += `${k+1}. ${elev[k]} <br/>`
}