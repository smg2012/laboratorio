// Programa JS para consola: verificar si un número es par o impar

// Pedimos número al usuario por consola
const prompt = require('prompt‑sync')();  // si usas Node.js; instala con `npm install prompt‑sync`
const input = prompt("Ingresa un número: ");
const numero = parseInt(input, 10);

if (isNaN(numero)) {
  console.log("Debes ingresar un número válido.");
} else {
  if (numero % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}