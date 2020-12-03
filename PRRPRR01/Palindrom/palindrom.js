let textarea = document.querySelector("#text")
let button= document.querySelector("#button")
let p_display1 = document.querySelector("#display1")
let p_display2 = document.querySelector("#display2")

button.addEventListener ("click",palindrome)

function palindrome() {
let str = textarea.value
console.log(str);
let res = str.split("");
console.log(res);
let revers = res.reverse().join('');
console.log(revers);
}

