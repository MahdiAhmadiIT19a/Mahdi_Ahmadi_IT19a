console.log("hej hej")

let name = "Mahdi"
let age = 18

console.log(`Hej ${name} du är ${18} år gammal`)

if (age >= 18){
    console.log("Du är vuxen")
} else {
    console.log("Du är barn")

}

Let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`

Let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

let button =document.querySelector("#knapp")

button.addEventListener("click",math)

function math(event){
    console.log("math-funktionen körs")
    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)
    add.innerHTML = `${num1}+${num2}=${num1+num2} `
    sub.innerHTML = `${num1}+${num2}=${num1-num2} `
    mult.innerHTML = `${num1}*${num2}=${num1*num2} `
    div.innerHTML = `${num1}/${num2}=${num1/num2} `
}