// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    // Tu código aquí
function despedir() {
    console.log("Adiós")
}
despedir()
// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    // Tu código aquí
function multiplicarPorDos(a) {
    return a*2
}

multiplicarPorDos(2)
// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    // Tu código aquí
let edad = 20
function esMayorDeEdad(a) {
    if(a>18) {
        return true
    } else {
        return false
    }
}
esMayorDeEdad(edad) 
// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    // Tu código aquí
function multiplicar(a, b){
    console.log(a*b)
}
multiplicar(2, 4)
// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    // Tu código aquí
function saludarPersonalizado(nombre, apellido) {
    return "Hola, " + nombre + " " + apellido
}
saludarPersonalizado("Hypatia", "Garcia")
// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    // Tu código aquí
function calcularPotencia(base, exponente) {
    return base**exponente
}
calcularPotencia(2, 3)
// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    // Tu código aquí
    function restar(a, b) {
    return a - b
}
restar(9, 2)
// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    // Tu código aquí
function dividir(dividendo, divisor) {
    return dividendo/divisor
}
dividir(15, 5)
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
    // Tu código aquí
const multiplicarDOS = function(a, b) {
    return a * b
    }
multiplicarDOS(3, 4)
// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    // Tu código aquí
const saludar = function(nombre) {
    return "Hola, " + nombre
}
saludar("Hypatia")
// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    // Tu código aquí
const esPar = function(numero) {
    if(numero%2 === 0) {
        return true
    } else {
        return false
    }
}
esPar(6)
// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
const multiplicarFlecha = (a, b) => a * b
multiplicarFlecha(3, 4)

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
const saludarFlecha = (nombre) => console.log("hola, " + nombre)
saludarFlecha("Hypatia")

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = (r) => {
    return 3.14 * (r**2) }
calcularArea(3)

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n === 0) {
        return 0;
    }
    return n + suma(n - 1);
}
suma(3)

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}
fibonacci(6)

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if(n===0){
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
factorial(5)
// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    if (exponente === 1) {
        return base;
    }
    return base * potencia(base, exponente - 1);
}
potencia(2, 3)
// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
