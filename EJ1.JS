

// Evaluar con un switch la calificacion (70), si es A
// B, C, D o E

const calificacion = parseInt(prompt("Ingresa tu calificacion"));
let  resultado = "";

switch (calificacion) {
    case 100:
        resultado = "A";
        break;
    case 90:
        resultado = "B";
        break;
    case 80:
        resultado = "C";
        break;
    case 70:
        resultado = "D";
        break;
    case 60:
        resultado = "F";
        break;
    default:
        resultado = "otro"
}
console.log(resultado)