let diceNumber1 = 0
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")

dice1_btn.addEventListener("click", diceRoll1)

function diceRoll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = diceNumber1
    console.log(diceNumber1);
}

dice2_btn.addEventListener("click", diceRoll2)

function diceRoll2(){
    diceNumber2 = 1+Math.floor(Math.random()*6)
    p2_result.innerHTML = diceNumber2
    console.log(diceNumber2);
}

