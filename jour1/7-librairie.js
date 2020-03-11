// cas pratique

function addition (a,b){
    return a + b;
}

function multiplication (a,b) {
    return a*b;
}

module.exports.addition = addition;
module.exports.multiplication = multiplication;

const phrase = "Bonjour la famille";

console.log(phrase);

module.exports.phrase = phrase.length;