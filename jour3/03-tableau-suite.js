const resultat = [1,2,3,4,"hello"];

// modifier l'élément contenant la valeur 2
// utiliser la méthode FINd()
// 1 seul argument => fonction
// resultat.find(function(){});

const indexDeux = resultat.find(function(item){
    return item == 2 ;
});


console.log(indexDeux);

// l'index
const index = resultat.indexOf("hello");
console.log(index);

const t = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4}
];

const resultats = t.find(function(item){
    return item.id === 10;
});

console.log(resultats);
const position = t.indexOf(resultats);

console.log(position);

t[position] = {
    id: 10,
    titre: "nouvel article",
    contenu: "article 1"
};

console.log(t);

// rechercher ds le tableau b

const r = b.find(function(item){ // r contient la position ds la RAM de {_id:2} => passage de références
    return item._id === 2;
});

const indexElement = b.indexOf(r);

b.splice(indexElement, 1);

console.log(b);



const rr = b.find(function(item){ // r contient la position ds la RAM de {_id:2} => passage de références
    return item._id === 2;
});

const indexFirst = b.indexOf(rr);

b[indexFirst, 1] = {_id:1, titre: "titre de l'article 1"};

console.log(b);