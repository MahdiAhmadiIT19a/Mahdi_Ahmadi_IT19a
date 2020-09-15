//modulusoperator
console.log(`${25%2}`);

let tal = 22;

// avgöra om talet är jämt eller udda

// tal%2 är 0: jämnt
// tal%2 är 1: udda

if (tal%2 === 0){
    console.log("talet är jämnt")
} else {
    console.log("talet är udda")
}

let tal1 = prompt("ange talet:")

if (tal1 > 0){
    console.log("Positivt")
} else if (tal1 == 0){
    console.log("Talet är 0")
} else {
    console.log("negativt")
}