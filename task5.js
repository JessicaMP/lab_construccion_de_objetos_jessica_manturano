// ¡Escribe tu código debajo de esta línea!
function FriendsList(list) {
  this.friends = list;
  this.imprimir = function () {
    console.log(this.friends);
  };
}

const getItems = (arg) => {
    const counterItems = Number(arg[3])
    return (arg.reverse().splice(0, counterItems)).reverse()
}

const amigos = new FriendsList(getItems(process.argv));
amigos.imprimir()
// ¡Escribe tu código eamigosncima de esta línea!
