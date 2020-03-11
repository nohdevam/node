const bdd = [
    {
        _id: 1,
        titre : "article 1",
        contenu: "description",
        prix: 20
    },
    {
        _id: 2,
        titre : "article 2",
        contenu: "description 2",
        prix: 203
    }
];

console.log(bdd);

bdd.push( {
    _id: 3,
    titre : "article 3",
    contenu: "description 3",
    prix: 30
});

bdd.push({
    _id: 4,
    titre : "article 4",
    contenu: "description 4",
    prix: 304
});
console.log(bdd);

const resBdd = bdd.find(function(item){
    return item._id === 2; });

    const indexDeux = bdd.indexOf(resBdd);

    bdd[indexDeux].prix = 250; // MODIF SIMPLE DE OUF

console.log(bdd);

const resBdd1 = bdd.find(function(item){
    return item._id === 1; });

    const indexUn = bdd.indexOf(resBdd1);

    bdd[indexUn].titre = "new article 1" ; // MODIF SIMPLE DE OUF

console.log(bdd);

bdd.splice( bdd.length -1, 1);
console.log(bdd);
