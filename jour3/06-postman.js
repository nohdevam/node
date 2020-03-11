const express = required("express"); // téléchgarger le module
const app = express(); // créer le serveur

const bdd = [{
    _id: 1,
    nom : "produit 1",
    prix : 30
},
{
    _id: 2,
    nom : "produit 2",
    prix : 15
}

];
console.log(bdd);

// READ ALL => voir tout ce qui est dans la variable bdd

app.get("/", function(req, res){
    // Si un client m'appelle => rnevoi de la variable bdd en Intégralité
    res.send(bdd);
});
// http://localhost:2500


// http://localhost:2500/1
// http://localhost:2500/2
// http://localhost:2500/3

app.get("/:id", function(req, res){
    const id = req.params.id ; 

    const article = bdd.find(function(item){
        return item._id === parseInt(id);
    })
    if (!article){
        res.status(404).send("aucun produit disponible" + id);
        return;
    }


    res.send(article);
});
 // pour ajouter un nouvel élément ds ma bdd => OBLIGATOIRE avant le POST
 // "nom" : "nouveau produit"
app.use(express.json());

app.post("/:id", function(req,res){
    const body = req.body;

    bdd.push(body);
    res.send(bdd);
})

// http://localhost:2500/1
app.delete("/:id", function(req,res){
    const id = params.id;

    const article = bdd.find(function(item){
        return item._id === parseInt(id);
    });

    if(!article){
        res.status(404).send(`l'article numéro ${id} est déja supprimé`);
        return;
    }
    // supprimer
     const index = bdd.indexOf(article);
     bdd.splice(index, 1);
     res.send(bdd);
});
// http://localhost:2500/1
/*body
{
    "nom" : "nom modifié"
    "prix": 33
}
*/

app.put("/:id", function(req, res){
    const id = req.params.id;
    const body = req.body;
    const article = bdd.find(function(item){
    return item._id === parseInt(id);
 });

 if(!article){
    res.status(404).send(`l'article n° ${id} n'existe pas`);
    return;
 }
    const index = bdd.indexOf(article);

 bdd[index].nom = body.nom;
 bdd[index].prix = body.prix;

 res.sen(bdd);
});

app.listen(2500);
