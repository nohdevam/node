/*const categories = [
    {},
    {},
    {}
]*/

//mongodb+srv://ifocop_admin:<password>@cluster0-62zc5.mongodb.net/test?retryWrites=true&w=majority

//mongodb+srv://ifocop_admin:azerty1234@cluster0-62zc5.mongodb.net/test?retryWrites=true&w=majority

const mongoose = require("mongoose");

const urlBdd = "mongodb+srv://ifocop_admin:azerty1234@cluster0-62zc5.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(urlBdd, { useUnifiedTopology: true ,  useNewUrlParser: true})
.then(function(){
    console.log("connexion reussi !");
})
.catch(function(err){
    console.log(err);
});


async function insertData(){
    const schemaCategorie = new mongoose.Schema({
        nom : String // S majuscule OBLIGATOIRE
    });
    
    const Category = mongoose.model('categorie', schemaCategorie);
    
    const dataCategorie = {
        nom : "nouvelle catégorie"
    };
    
    const categorie = new Category(dataCategorie);
    const result = await categorie.save();
    console.log(result)
}

insertData()