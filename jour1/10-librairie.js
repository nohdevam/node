const auteur = "Victor Hugo";
// dans auteru => stocker une chaine de caractère = type string

// en plus d estocker la valeur Victor Hugo" dans la variable 
// en + javascript avec ajouter des propriétés à notre variable

console.log(auteur.length);

const debut = auteur.substring(0,1);
console.log(debut);

const jourSemaine = ["Lundi","Mardi"];
// variable jourSemaine de type ARRAY

const nbElementvariable = jourSemaine.length;
console.log(nbElementvariable);


// creer un module comptant le nbre de caractère
function nbCar(texte){
    console.log(text.length);
}

// nbCar("bonjour les amis comment allez-vous ??");

module.exports.nbCar = nbCar;