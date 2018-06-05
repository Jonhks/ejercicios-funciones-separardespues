
const ceviche = 0;
const tacos = 1;
const empanada =1;

aComer = () => {

const comida = prompt(`Ingresa que quieres comer
1.- ceviche
2.- tacos
3.- empanada`);
switch (comida) {
    case "ceviche" : 
        if(ceviche  > 0) {
            alert("Tu comida es Ceviche");
            break;
    }
    case "tacos":
    if(tacos  > 0) {
        alert("Vas a comer deliciosos Tacos");
            break;
    }
    case "empanada":
    if(empanada  > 0) {
        alert("Tu comida es Empanadas");
        break;
    }
    default: 
        alert("Bueno, será hamburguesa");
}
} 

aComer();