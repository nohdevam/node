const express = require("express");

const app = express();

const baseDeDonnee = [
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"}
];

app.get("/", function(req, res){ // http://localhost:4300
    res.send(baseDeDonnee);
});

app.get("/matière/:id" , function(req, res){
    const id = req.params.id ;
    res.send(baseDeDonnee[id-1]); // http://localhost:4300/matière/1
});

app.get("/matière/:id" , function(req, res){
    const id = req.params.id ;
    res.send(baseDeDonnee[id-2]); // http://localhost:4300/matière/2
});
app.listen(4300);

app.post("/add +", function(req, res){ http://localhost:4300/add + 
    const autreMatière = {
    "id" : 4 ,
     "nom" : "autre matière"}; // =>stocke ce que l'on va donner dans postman
    baseDeDonnee.push(nouvelArticle);
    res.send(baseDeDonnee);
});


