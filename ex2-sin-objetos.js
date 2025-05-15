const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach(name => console.log(`Ejercicio 1: Siguiente número: ${name}`));
// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const index = students.findIndex(name => name === 'Maria');
console.log(`Ejercicio 2: Primer número mayor de 10: ${index}`);
// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const boolSome = students.some(name => name === 'Katerina');
console.log(`Ejercicio 3: ¿Existe Katerina?: ${boolSome}`);
// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const nameFound = students.find(name => name.length <= 5);
console.log(`Ejercicio 4: Primer nombre que tiene 5 o menos carácteres: ${nameFound}`);
// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const boolEvery = students.every(name => name.length >= 4);
console.log(`Ejercicio 5: ¿Todos los nombres tienen al menos 4 caracteres?: ${boolEvery}`);
// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const newArray = students.filter(name => name.includes('i'));
console.log('Ejercicio 6: Nombres que contienen la letra "i":', newArray);
// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
const mappedArray = students.map(name => name[0]);
console.log('Ejercicio 7: Nombres que contienen la letra "i":', mappedArray);