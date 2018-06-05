const imprimir = document.getElementById("imprimir");

const str = prompt("dame tu frase");

aImprimir= (str, imprimir) => {
    let letra = "";
    for(let i = 0; i<str.length; i++ ) {
        console.log(str[i].toUpperCase());    
    }
}

aContar = () => {
    let cont = 0;
    for(let i = 0; i<str.length; i++    ) {
        cont += 1;
    }
console.log(cont);
}

espacios = () => {
    for (let i; i< str.length; i++) {
        if (str[i] === " ") {
           console.log(charAt(str[i]));
        }
    }
}


aImprimir(str);
aContar(str);
espacios(str);