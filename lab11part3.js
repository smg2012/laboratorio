// Pedir el monto al usuario
let input = prompt("Ingresa el monto total de tu compra:");
let monto = parseFloat(input);

// Validar que sea un número válido y no negativo
if (isNaN(monto) || monto < 0) {
  alert("Por favor ingresa un monto válido.");
} else {
  let total = monto;
  // Si el monto es mayor a 100 → aplicamos 10 % de descuento
  if (monto > 100) {
    total = monto * 0.90;
  }
  // Mostramos el monto final
  alert("Total a pagar: $" + total.toFixed(2));
}