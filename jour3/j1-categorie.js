const express = require("express"); // téléchgarger le module
const app = express(); 

const categories = [
	{_id : 1 , nom : "informatique"},
	{_id : 2 , nom : "management"},
	{_id : 3 , nom : "mathématique"},
];

console.log(categories);

app.get("/", function(req, res){
    // Si un client m'appelle => rnevoi de la variable bdd en Intégralité
    res.send(categories);
});
// http://localhost:4002

// http://localhost:4002/1
// http://localhost:4002/2
// http://localhost:4002/3

app.get("/:id", function(){
    const id = req.params.id;

    const article = categories.find(function(item){
        return item._id === parseInt(id);
    })
    if(!article){
        res.status(404).send("aucun produit disponible avec l'id" + id);
        return;
    }
    res.send(article);
})

// http://localhost:4002/3

app.put("/:id", function(req, res){
    const id = req.params.id;
    const body = req.body;

    const article = categories.find(function(item){
        return item._id === parseInt(id);
    });
    if(!article){
        res.status(404).send(`l'article n° ${id} n'existe pas`);
        return ;
    }

    const index = categories.indexOf(article);
    
    categories[index].nom = body.nom;

    res.send(categories)

});

    
app.listen(4002);