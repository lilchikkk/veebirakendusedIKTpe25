// Anonüümse funktsiooni näide
var tervita = function() {
    console.log("Tere maailm!");
};

// Anonüümse funktsiooni kutsumine
tervita();


var summa = function(a, b) {
    return a + b;
};

var tulemus = summa(3, 5);
console.log(tulemus); // Väljund: 8

// Anonüümne funktsioon koos argumendiga
setTimeout(function() {
    console.log("Tere pärastlõunast!");
}, 1000);

(function() {
    var x = 10;
    console.log(x); // Output: 10
})();


//noolefunktsioon argumentidega
let tervita1 = (nimi) => {console.log(`Tere ${nimi}`)};
tervita1("Juhan");

//noolefunktsioon lihtsustatud - KUI ARGUMENTE ON ÜKS, SIIS VÕIB KA NEED SULUD ÄRA JÄTTA
let tervita2 = nimi => console.log(`Tere ${nimi}`);
tervita2("Mari");

//kui kehas on rohkem ridu, siis sulud jäävad
let liitmine3 = (a, b) => {
    let result = a + b;
    return result;
};
console.log(liitmine3(3,5));



//noolefunktsioon lihtsustatud argumentidega
let liitmine = (a, b) => a + b;
console.log(liitmine(3,5));

//noolefunktsioon ja massiviist elementide kuvamine
const array = [1, 2, 3, 4, 5];
array.forEach(element => console.log(element));