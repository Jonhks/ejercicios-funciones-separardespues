let edad = ""; 

esDecimal = (edad) => {
    if(edad % 1 !== 0) {
        return true;
    }else {
        return false;
    }
}




do {
    edad = prompt("dime tu edad");
} while (esDecimal(edad))
    console.log(edad);




// %de 1 decimal
// .length
// isNan

etapasDeEdad = (edad) => {
    if (edad  <= 1 ) {
        alert("Eres un Baby");
    }else if (edad <= 3) {
        alert("Eres un Toddler") 
    }else if (edad <= 5 ) {
        alert("Eres prescool")
    }else if (edad <= 12) {
        alert("Eres Gradeschooler")
    }else if (edad <= 18) {
        alert("Eres Teen")
    }else if (edad <= 21) {
        alert("Eres Young Adult");
    }
}

etapasDeEdad(edad);
  