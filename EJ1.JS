

// Evaluar con un switch la calificacion (70), si es A
// B, C, D o E

//const calificacion = parseInt(prompt("Ingresa tu calificacion"));
//let  resultado = "";

//switch (calificacion) {
    //case 100:
       // resultado = "A";
       // break;
    //case 90:
      //  resultado = "B";
       // break;
    //case 80:
      //  resultado = "C";
      //  break;
    //case 70:
      //  resultado = "D";
       // break;
    //case 60:
      //  resultado = "F";
       // break;
    //default:
      //  resultado = "otro"
//}
//console.log(resultado)}
/*const grade = parseInt(prompt("Insert your grade"));
let  result = "";

if(grade <= 100 && grade >= 91){
     result = "A"
} else if(grade <= 90 && grade >= 81){
    result = "B"
} else if(grade <= 80 && grade >= 71){
     result = "C"
}else if(grade <= 70 && grade >= 61){
     result = "D"
}else if(grade <= 60 ){
     result = "F"
}

console.log(result) */
/*Ejercicio Casa de cambio

-Crea un script con el algoritmo para deducir a que tipo de moneda sera la conversion:

Tipos de cambio

USD = 19.01
EURO = 21.03
LIBRA ESTERLINA = 24.09

-Solicitar al usuario que tipo de moneda y cuanto va convertir a pesos mexicanos
ejem:
input: 'USD'
input: 20
output: el resultado de tu conversion es 380.02 MXN */



const currency = prompt("Type what currency you want to convert to MXN")
const quantity = parseInt(prompt("How much do you want to convert?"))
const convertion  = (curr, quant) => {
    const usd = 19.01
    const euro = 21.03
    const libra = 24.09
    let result = 0
    if(curr === "usd") {
        result = usd * quant
    } else if (curr === "euro"){
        result = euro * quant
    } else if (curr === "libra"){
        result = libra * quant
    } return ` The result of your convertion is ${result} MXN` }
    

    console.log(convertion(currency, quantity))
