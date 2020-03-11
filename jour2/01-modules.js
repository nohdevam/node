const calculAire = function (largeur, hauteur){

    if(typeof largeur != "number"){
        console.log("largeur incorrecte");
        return ; // stop exécution du code 
        return ""; // stop exécution du code 
    }

    if(typeof hauteur != "number"){
        console.log("hauteur incorrecte");
        return ; // stop exécution du code 
        return ""; // stop exécution du code 
    }   

    return `le rectange a une largeur de ${largeur} et une hauteur de ${hauteur} et il a une aire de ${largeur * hauteur }`;
}
module.exports.calculAire = calculAire ;


      

