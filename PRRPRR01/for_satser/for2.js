let p_talserie1 = document.querySelector("#talserie1");

let p_talserie2 = document.querySelector("#talserie2");
let lektioner = document.querySelector("#summa");
p_talserie1.innerHTML = ("Jämna tal från 0 till 100: ");
p_talserie2.innerHTML = ("Udda tal från 0 till 100: ");

for (let j=0; j<=100; j++){
  if (j%2 == 0){
     p_talserie1.innerHTML += `${j},`
  }
}

for (let i=0; i<=100; i++){
    if (i%2 == 1){
    p_talserie2.innerHTML += `${i},`
    }
}

