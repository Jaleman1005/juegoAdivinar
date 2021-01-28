const URL = "https://swapi.dev/api/";
const PEOPLE = "people/:id";

const opts = { crossDomain: true };

function onError(id) {
  console.log(`Sucedio un error al obtener un personaje ${id}`);
}
//retorna una promesa con el personaje perteneciente al id
function obtenerPersonaje(id) {
  
  return new Promise((resolve, reject) => {
    const url = `${URL}${PEOPLE.replace(":id", id)}`
    $.get(url, opts, function (data) {
      resolve(data)
    }).fail(() => reject(id))
  });
}
//realiza una llamada asincrona para traer a todos los personajes que se pidieron por id
async function obtenerPersonajes() {
    let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let promesas = ids.map(id => obtenerPersonaje(id));
  try {
    let personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();
//se realizan llamadas de promesas en cadena
/* obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`);
    return obtenerPersonaje(2)
  })
  .then(function (personaje) {
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3)
  })
  .then(function (personaje) {
    console.log(`El personaje 3 es ${personaje.name}`);
    return obtenerPersonaje(4)
  })
  .then(function (personaje) {
    console.log(`El personaje 4 es ${personaje.name}`);
    return obtenerPersonaje(5)
  })
  .then(function (personaje) {
    console.log(`El personaje 5 es ${personaje.name}`);
  })
  .catch(onError);
 */
//guarda los ids de los personajes que se quieren pedir
/* let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */
/* let promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
}) */
//se crea un array con los datos obtenidos de la promesa
/* let promesas = ids.map((id) => obtenerPersonaje(id)); */
//se imprimen los personajes
/* Promise.all(promesas)
  .then((personajes) => console.log(personajes))
  .catch(onError);
 */
