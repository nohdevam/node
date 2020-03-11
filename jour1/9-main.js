// 9-main.js

//importer toutes les variables qui viennet du fihier 9-modul.js
// stocker
// const lib = require("./9-module");

// console.log(lib);
// console.log(lib.lib.nom);

// shelle node 9-main.js

const objet = require("./9-module");

console.log(objet); // contient l'intégralité de tous les exports réalisé dans le fichier 9-moduke.js
// afin d'éviter d'écrire objet.formation.sujet
//nous allons utiliser la destructuration

const {lib, fromation} = require("./9-module");
console.log(lib.nom);

// const {formation} = require("./9-module");
console.log(formation.sujet)

const {date} = require("./9-module");

console.log(date);