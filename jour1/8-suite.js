// 8-suite.js

// nous avons vu les oblets => nous allons les utiliser en permanence
// permet de bien structurer son code (ranegr)

const calcul = {
    addition: function(){
        console.log(2+3);
    },
    soustraction: function(){
        console.log(2-1);
    }
    }; // définition de la variable

    // utiliser =>
    calcul.addition();

    // dans les helle j'execute mon code 
    //node 8-suite.js

    // pour utiliser plus vite le méthodes qui sont stockées ds la variable calcul
    // destructurer notre objet

    const {addition} = calcul ;
    addition();

    const javascript = {
        creation: 1996,
        environnement: "internet explorer",
        action : function(){
            console.log("modifier de manière dynamique une page web");
        }
    }
    // méthode classique 
    console.log(javascript.creation);
    javascript.action();

    // nouvelle méthode pôur utiliser de sméthdes ou des propriétés stockées dans objet

    // destructurer notre ibjet
    const {creation , action} = javascript;

    console.log(creation);
    action();

    