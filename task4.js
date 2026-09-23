// ¡Escribe tu código debajo de esta línea!

function Journey(desde, hasta) {
  this.inicio = desde;
  this.fin = hasta;
}

// ¡Escribe tu código encima de esta línea!

const viaje = new Journey(process.argv[3], process.argv[4])

console.log("Reservando un taxi desde " + viaje.inicio + " hasta " + viaje.fin + ".")