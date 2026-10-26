let auto = {
    mark: "Toyota",
    mudel: "Corolla",
    aasta: 2022,
    varv: "punane"
};

console.log(auto);
console.log(auto.mark);

let auto1 = {
    mark: "Toyota",
    mudel: "Corolla",

    taisnimi() {
        return this.mark + " " + this.mudel;
    }
};

console.log(auto1.taisnimi());

let autod2 = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];


autod2.forEach((auto) => {
    console.log(`
    Mark: ${auto.mark},
    Mudel: ${auto.mudel},
    Aasta: ${auto.aasta}
    `);
});

let autod4 = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];


// lisab uue objekti massiivi lõppu
autod4.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
autod4.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });

// eemaldab massiivist esimese auto
autod4.splice(0, 1);

console.log("Pärast esimese auto eemaldamist:");
console.log(autod4);

// lisab Audi teisele positsioonile
autod4.splice(1, 0, {
    mark: "Audi",
    mudel: "A4",
    aasta: 2018
});

console.log("Pärast Audi lisamist:");
console.log(autod4);



//Otsimine
let otsing = autod4.find(auto=>auto.aasta > 2018);
console.log("Esimene auto, mis on uuem kui 2018:");
console.log(otsing);

// Tesla, mis on uuem kui 2018
let teslaOtsing = autod4.find(
    auto => auto.aasta > 2018 && auto.mark === "Tesla"
);

console.log("Otsingu tulemus:");
console.log(teslaOtsing);


// leiab kõik autod, mis on uuemad kui 2018
let uuemadAutod = autod4.filter(auto => auto.aasta > 2018);

console.log("Autod, mis on uuemad kui 2018:");
console.log(uuemadAutod);

// leiab paarisarvud
let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let paarisarvud = arvud.filter(arv => arv % 2 === 0);

console.log("Paarisarvud:");
console.log(paarisarvud);

autod2.sort((a, b) => a.aasta - b.aasta);
console.log("Autod sorteeritud aasta järgi:");
console.log(autod4);