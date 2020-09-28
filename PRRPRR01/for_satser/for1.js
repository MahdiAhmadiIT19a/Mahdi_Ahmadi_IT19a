for (let i=1 ; i<=10 ; i++) {
console.log (`${i}.hej!`)
}
let p_for1 = document.querySelector("#for1")

for (let i=0 ; i<=10 ;i++) {
p_for1.innerHTML += `${i}.hej från JS <br/>`
}