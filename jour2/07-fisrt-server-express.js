const express = require("express");

const app = express();

app.get("/" , function(req, res){
    const article = {
        id: 1,
        titre: "Article n°1",
        contenu: "contenu du premier article",
        categorie: ["tuto" , "javascript"]
    };
    res.send(article);
});
app.listen(5000);

// http://localhost:5000

app.get("/profils" , function(req,res){
    const profils = [{
        id: 1,
        prenom: "Alain"
    },
    {
        id: 2,
        prenom: "Béatrice"
    }];
    res.send(profils);
});
app.listen(5001);
// http://localhost:5001/profils

// http://localhost:5003/articles/1
// http://localhost:5003/articles/2
// http://localhost:5003/articles/3
app.get("/articles/:id", function(req, res){
    const id = req.params.id ;
    const articles = [
        {
            id : 1,
            titre :"article n°1"
        },
        {
            id : 2 ,
            prenom : "article n°2"
        },
    ];
    res.send(articles[id -1]);
});
app.listen(5003);



