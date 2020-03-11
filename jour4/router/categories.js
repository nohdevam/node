const express = require("express");
const Joi = require("@hapi/joi");

const router = express.Router();

const categories = [
	{id : 1 , nom : "informatique"},
	{id : 2 , nom : "management"},
	{id : 3 , nom : "mathématique"},
];



router.get("/", function(req, res){
    res.send(categories);
// http://localhost4004
});

router.get("/:id", function(req,res){
    const id = req.params.id;

    const categorie = categories.find(function(item){
        return item.id === parseInt(id);
    });
    if(!categorie){
        res.status(404).send("aucun produit disponible avec l'id" + id);
        return;
}
    const index = categories.indexOf(categorie);
    res.send(categories[index]);

// http://localhost4004/1
// http://localhost4004/2
// http://localhost4004/3

});


router.post("/", function(req, res){
    const body = req.body;

    const schema = Joi.object({
        id : Joi.number().min(0).required(),
        nom : Joi.string().min(3).max(255).required()
    });
    const verif = schema.validate(body);

    /*
    {
        "id": 4,
        "nom": français
    }
    */

    if(verif.error){
        res.status(403).send(verif.error.details[0].message);
        return;
    }
   res.send(verif);

   const categorie = categories.find(function(item){
       return item.id === parseInt(body.id);
   });

   if(categorie){
       res.status(400).send("il existe déja une catégorie avec l'id " + body.id);
       return;
   }

   categories.push(body);
   res.send(categories);
});



router.delete("/:id", function(req,res){
    const id = req.params.id;

    const categorie = categories.find(function(item){
        return item.id === parseInt(id);

    })
    if(!categorie){
        res.status(404).send("aucun enregistrement avec l'id " + id);
        return;
    }
    const index = categories.indexOf(categorie);
    categories.splice(index,1);
    res.send(categories);
});



router.put("/:id", function(req,res){
    const id = req.params.id;
    const body = req.body;

    const categorie = categories.find(function(item){
        return item.id === parseInt(id);
    });
    if(!categorie){
        res.status(404).send("aucun enregistrement avec l'id" + id);
        return ;
    }
    const schema = Joi.object({
        nom : Joi.string().min(3).max(255).required()
    })
    const verif = schema.validate(body);

    if(verif.error){
        res.status(400).send(verif.error.details[0].message);
        return;
    }
    const index = categories.indexOf(categorie);
    categories[index].nom = body.nom;
    res.send(categories);

});

module.exports = router;