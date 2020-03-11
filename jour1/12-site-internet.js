const http = require("http");

// 2 créer mon serveur 
const server = http.createServer();

server.on("request" , function(req,res){
	// callback => fonct est exécutée uniquement lorsque l'on appelle l'adrese
    // http://localhost:3022
	// toutes les actions qui sont écrites ici vous être exécutées
    // uniquement si un internaute appelle le serveur
    
    if(req.url == "http://localhost:3045"){
    
        res.write("bienvenu sur votre site");
        res.end();
    }
    
    if(req.url == "http://localhost:3045/presntation.html")
    {
        res.write("voici mon portfolio");
        res.end();
    }
    if(req.url == "http://localhost:3045/info.xml")
    {
    	
        res.write("détail du profil");
        res.end();
    }
});

server.listen(3045, "localhost")