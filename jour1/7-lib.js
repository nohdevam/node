// 7-lib.js

//rappel de javascript
// var mot clé de javascript
//const
//let

//var hello = "bonjour";
//var hello = 2;
// node 7-libs.js => aucune erreur à l'écran

// const bonjour = 1;
// const bonjour = 2;
// node 7-libs.js => erreur à l'écran

//const jour = "Lundi"; // variable dont la valeur ne change pas
//jour = "Mardi";
// node 7-libs.js
// attention vous êtes en train de changer la valeur de la variable

//let day = "lundi";
//let day ="Mardi";
// node 7-libs.js
// attention vous êtes en train de redéfinir la valeur de la variable

//let week = 2;
//week = 3;
// node 7-libs.js => pas d'erreur


// en informatique on a besoin de bcp de variable lorsque l'on fait un programme
// dc nous allons devoir réaliser de nbreux 
// const variable = 2;
// const variable = 2;
// const variable = 2;
// en  js => variable de type objet

const fenetre = {
    largeur: 250, // a l'interieur des {} => : et , 
    hauteur: 400,
    unité: "px"
};

console.log(fenetre.hauteur);


const voiture = {
    marque: "Peugeot",
    modele: 206,
    anneeAchat: 2020,
    proprietaire: {
        nom: "Alain",
        age: 24
    }
};

console.log(voiture.proprietaire.age);
console.log(voiture.modele);

const nb1 = 3;
const nb2 = 10;
const total = nb1 + nb2;

console.log(total);

const prenom = "Victor";
const nom = "Hugo";
const auteur = prenom + " " + nom; // concatenation addition de chaine de caractères
// concaténation à l'ancienne

console.log(auteur);

// nouvelle façon de concaténer
const auteur2 = `${prenom} ${nom}`;
console.log(auteur2);

const formation = {
    debut: "1er janvier 2020",
    fin: "31 décembre 2020",
    domaine: "React"
};
// écrire la phrase suivante
// ma foromation commence le 1er janvier 2020 sur React

const phrase = `ma formation commence le ${formation.debut} sur ${formation.domaine}`;

console.log(phrase);

// écrire la phrase suivante ds le console
const phrase2 = `je suis une formation sur ${formation.domaine} qui fini le ${formation.fin}`;
console.log(phrase2);

// variable = stocker 1 ou plusieurs valeurs
// fonction = variable ds leaquelle stocker 1 ou plusieurs instructions

function bonjour2 (){
    const a=2; // ; à la fin d'une instruction
    const b=3;
    console.log(a + b);
}

// je stock ds la variable bonjour 3 instructions

bonjour2();

const salutation = function(){
    console.log("Decouverte javascript !!!!!");
}

salutation();

const finMatnee = {
    heure: "12h30", //propriété
    action: function() { //méthode
        console.log("le temps d'aller déjeuner !");
    }
}

finMatnee.action(); // () IMPORTANT





