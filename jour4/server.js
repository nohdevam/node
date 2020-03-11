const express = require("express");
const Joi = require("@hapi/joi");
const mongoose = require ("mongoose");

const urlBdd = "mongodb+srv://ifocopa_dmin:azerty1234@cluster0-v0nsf.mongodb.net/test?retryWrites=true&w=majority";
const optionConnexion = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
mongoose.connect(urlBdd, optionConnexion)
.then(function(){
    console.log("connexion reussi");
})
.catch(function(err){
    console.log(err)
});

const schemaCategory = mongoose.Schema({
    nom: String
})

const Category = mongoose.model("categorie", schemaCategory);


const app = express();

app.get("/", async function(req,res){
    const resultat = await Category.find();
    res.send(resultat);
});


app.use(express.json);

app.post("/", async function(req,res){
    const body = req.body;
    const schema = Joi.object({
    nom: Joi.String().min(3).max(255).required()
    });

    const verif = schema.validate(body);

    if(verif.error){
        res.status(404).send(verif.error.details[0].message);
        return;
    }
    const categoryToSave = newCategory(body);
    await categoryToSave.save();
    const resultat = await Category.find();
    res.send(resultat); 
})

app.listen(3222);

