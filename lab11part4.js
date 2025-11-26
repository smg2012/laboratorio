// Genera un número aleatorio entre 1 y 10 (inclusive)
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Pedimos al usuario que adivine
const entrada = prompt("Adivina un número entre 1 y 10:");
const adivinanza = parseInt(entrada, 10);

// Verificamos que ingresó un número válido
if (isNaN(adivinanza)) {
  alert("Por favor ingresa un número válido.");
} else {
  // Comparamos la adivinanza con el número secreto
  if (adivinanza === numeroSecreto) {
    alert("¡Felicidades, adivinaste el número!");
  } else {
    alert("Lo siento, el número era " + numeroSecreto);
  }
}