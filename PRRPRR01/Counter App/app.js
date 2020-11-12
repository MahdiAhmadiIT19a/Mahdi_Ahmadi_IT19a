let p_siffra = document.querySelector("#siffra")
let upp = document.querySelector("#uppknapp")
let ned = document.querySelector("#nedknapp")
let reset = document.querySelector("#reset")

let siffra = 0; //3:ändra vid knapptryckningar

p_siffra.innerHTML = siffra;

upp.addEventListener("click", raknaUpp);
ned.addEventListener("click", raknaNed);
reset.addEventListener("click", resetNummer)

function raknaUpp() {
    //1:öka värdet på siffra
    siffra = siffra + 1;
    //2:skriva ut den i p_siffra
    console.log(siffra);
    p_siffra.innerHTML = siffra;
}

function raknaNed() {
    siffra = siffra - 1;
    p_siffra.innerHTML = siffra;
}

function resetNummer() {
    siffra = 0;
    p_siffra.innerHTML = 0;
}