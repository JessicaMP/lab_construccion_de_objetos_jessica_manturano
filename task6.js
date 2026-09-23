// ¡Escribe tu código debajo de esta línea!
function Shopping() {
  this.list = {};

  this.addItemsInList = (element, value) => {
    this.list[element] = value;
  };

  this.mostrarLista = () => {
    console.log("Cosas por comprar:");
    console.log();
    return Object.keys(this.list).forEach((item) => {
      console.log(`${item}: `, this.list[item]);
    });
  };
}
const mercado = new Shopping();
mercado.addItemsInList("leche", 1);
mercado.addItemsInList("pan", 2);

mercado.mostrarLista();

// ¡Escribe tu código encima de esta línea!
