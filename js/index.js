let jesus = [
  "diana",
  "fidel",
  "andres",
  "letty",
  "leandro",
  "ashlym",
  "Tico (Novio de ash)",
  "alondra",
  "mama",
  "papa",
  "yuri",
  "hijo de yuri",
  "El senor marcos",
  "Esposa senor macros",
  "Novio de alondra",
  "Naty"
];
let naty = [
  "Jesus",
  "karen",
  "Alejandro",
  "Isabel",
  "Graciela",
  "windson",
  "german",
  "libe",
  "yuli",
  "ayelen",
  "marcos",
  "betty",
  "Mario",
  "Adrian",
  "Vero",
  "mari",
  "Josue",
  "Ronal",
  "Vanesa",
  "Isa",
  "Yoel",
  "fermanda",
  "josep",
  "vale",
  "suni",
  "Novio de suni",
  "monica",
  "reberto",
  "patrick",
  "lidia",
  "Alex",
  "Angustina",
  "carminia",
  "fabricio",
  "Ezequiel",
  "Novia de Ezequiel",
  "Joselin ",
  "Marcos",
  "Marcela",
  "Waler",
  "Clara",
  "Marido de clara",
  "Sara",
  "Marido sara"
];
let ninos = [
  "Godbless",
  "katerine",
  "tamara",
  "Camila",
  "Enmanuel",
  "David",
  "Agostina",
  "Lola"
];

let calcularCosto = (cantidad, precio1, precio2) => {
  return cantidad < 80
    ? `Cantidad de personas ${cantidad} ,Total a pagar ${cantidad * precio1} `
    : `Cantidad de personas ${cantidad} ,Total a pagar ${cantidad * precio2} `;
};
let totalPersonas = jesus.length + naty.length + ninos.length / 2;
let precioMenor = 5736;
let precioMayor = 6640;
console.log(calcularCosto(totalPersonas, precioMayor, precioMenor));
