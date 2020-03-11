const tableauSimple = ["lundi", "mardi", "mercredi"];

const nombre = tableauSimple.length;
console.log(nombre);

tableauSimple.push(1); 
console.log(tableauSimple);

tableauSimple.push({id: 1 , name : "information"}); // => objet
console.log(tableauSimple);

tableauSimple[0] = "hello";
console.log(tableauSimple);

// variante de ce que l'on vient de voir
const id = 2;

tableauSimple[id - 1] = "autre information";
console.log(tableauSimple);

//modifier le dernier élément du tableau
tableauSimple[tableauSimple.length - 1] = 2;
console.log(tableauSimple);

// supprimer des items
//supprimer le 2eme élémnets du tableau
tableauSimple.splice(1,1);
console.log(tableauSimple);

//supprimer le dernier élémnets du tableau
tableauSimple.splice(tableauSimple.length - 1, 1);
console.log(tableauSimple);

// cas pratique
 const resultat = [1,2,3,5];

 const nbr = (resultat.length);
 console.log(nbr);

 resultat.push("hello");
 console.log(resultat);

 resultat.push({
     _id : 1235, 
     title : "article", 
     contenu : "nouvel article"
 });
 console.log(resultat);

resultat[2] = "troisième";
console.log(resultat);

resultat[0] = "first";
console.log(resultat);

resultat.splice( resultat.length -1, 1);
console.log(resultat);

resultat.push({
    _id : 12345 , 
    title : "nouveau"
});
console.log(resultat);




