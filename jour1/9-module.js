// 9-module.js

//rappel => tout ce que allez écrire ds ce fichier ne sera visible que ds ce fichier
//portée locale

const lib = {
    nom: "ma première librairie",
    version: 1.1,
    role: "generer du lorem ipsum",
    action: function(){
        console.log("lorem ipsum");
    },
    formation = sujet: "infromatique",duree: 4, unité: "mois"
}

// je vais avoir besion de nom objet et de ce qu'il stock 
// pour pouvoir l'utiliser dans un autre fichier => explicitement l'exporter

// cette ligne => spécialment pour noidejs
module.exports.lib = lib;
// module est un objet créer par nodejs
// un peu comme l'objet document qui est ctréé par javascript

//const formation = {
    //sujet: "infromatique",
    //duree: 4,
    //unité: "mois"s
// }
module.exports.formation = formation;



