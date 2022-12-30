

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
const grade = parseInt(prompt("Insert your grade"));
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

console.log(result)