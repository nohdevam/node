const express = require("express");

const app = express();

const baseDeDonnee = [
       
    {
        id : 1,
        name : "tuto"
    },
    {
        id : 2,
        name : "js"
    },
    {
        id : 3,
        name : "angular"
    },
];

app.get("/" , function(req, res){
    res.send(baseDeDonnee); // http://localhost:3022
});

app.get("/tuto/:id" , function(req, res){
    const id = req.params.id ;
    res.send(baseDeDonnee[id-1]); // http://localhost:3022/tuto/1
});

app.listen(3022);

// http://localhost:3020
app.post("/", function(req,res){
    // ajouter une nouvelle ligne dans le tableau baseDeDonnee
    const nouvelArticle = {
        "id" : 4,
        "name": "nouveau"
    };
   baseDeDonnee.push(nouvelArticle);
   res.send(baseDeDonnée);
});
app.listen(3020);

app.use(express.json() // fonction middleware
{
    "id" : 5,
    "name" : "encore un nouvel article"  // http://localhost:3020/nouveau
});


app.post("/nouveau", function(req, res){
    const nouvelArticle = req.body; // =>stocke ce que l'on va donner dans postman
    baseDeDonnee.push(nouvelArticle);
    res.send(baseDeDonnee);
});

app.listen(3020);


