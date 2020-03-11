const mongoose = require("mongoose");
const urlBdd = " mongodb+srv://ifocopa_dmin:azerty1234@cluster0-v0nsf.mongodb.net/test?retryWrites=true&w=majority";

const optionConnexion = {
    useNewUrlParser : true,
    useUnifiedTopology: true
};

mongoose.connect( urlBdd , optionConnexion )
.then(function(){
    console.log("connexion reussie");
})
.catch(function(err){
  
    console.log(err)
});

const schemaCategorie = mongoose.Schema({
    nom : String
});

const Category = mongoose.model("categorie", schemaCategorie)

//const resultat = Category.find();
//console.log(resultat);

async function getAllData(){
    const resultat = await Category.find();
    console.log (resultat);
};

getAllData();
