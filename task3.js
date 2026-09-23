// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto;
  this.mensaje = mensaje;

  this.imprimirCorreo = function () {
    console.log( `${this.asunto}: ${this.mensaje}`);
    ;
  };
}

const nuevoCorreo = new Mail("pizza", "piña");

// ¡Escribe tu código encima de esta línea!

nuevoCorreo.imprimirCorreo();
