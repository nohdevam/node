// installer un nouveau modul nmp i @hapi/joi

const joi = require("@hapi/joi");
const article = {
    _id : 1,
    nom : "article 1",
    info : "blabla"
};

// est que article contient la propriété _id
// est que article contient la propriété _id
// est que article contient la propriété _id
// est que article contient la valeur de la propriété _id est un chiffre
// est que article contient la valeur de la propriété _id est une chaine de caractères
// est que article contient la valeur de la propriété _id est une chaine de caractères de minimum 2 caractères

// définir un schéma = décrit tous les test que je dois effectuer
const schema = joi.object({
    _id : joi.number().required(),
    nom : joi.string().min(2).required() 
});

const verif = schema.validate(article);
console.log(verif);


const profil = {
    prenom : "Alain",
    nom : "Dufour",
    email : "alain@yahoo.fr",
    tel : "01010101",
    mdp : "azerty"
};

const schemaProfil = joi.object({
    prenom : joi.string().min(3).max(255).required(),
    nom : joi.string().min(3).max(255).required(),
    email : joi.string().email().required(),
    tel : joi.string().min(10).max(15).required(),
    mdp : joi.string().alphanum().required()
});

const verif2 = schemaProfil.validate(profil);

console.log(verif2);

