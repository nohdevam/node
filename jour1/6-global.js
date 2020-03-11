// 6-global.js

// lorsque l'on créer des variable et qu'on les exécutes dans node
// les variables sont locales
// chaque fichier est indépendant

// pour pouvoir accéder à la variable nombre qui est stockées dans le fichier 
// 2-node.js
// je vais devoir explicitement dire au code => je veux exporter cette variable

const {nombre, liste} = require("./2-node")

console.log(nombre);
console.log(liste);

// importer une variable
// module.import.nombre = nombre;
// module.import.liste = liste;
// 