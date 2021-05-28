const flores = ["rosa", "petunia", "margarita", "hortensia"];

function modificaPares(palabras, callback) {
  const palabrasModificadas = [];
  for (const i in palabras) {
    const palabra = palabras[i];
    if (i % 2 !== 0) {
      const palabraModificada = callback(palabra);
      palabrasModificadas.push(palabraModificada);
    } else {
      palabrasModificadas.push(palabra);
    }
  }
  return palabrasModificadas;
}
const floresModificadas = modificaPares(
  flores,
  (palabra) => palabra[0].toUpperCase() + palabra.slice(1)
);

console.log(floresModificadas);
