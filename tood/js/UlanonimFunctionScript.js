// Klassikaline funktsioon
function minuNimi() {
    console.log("Liliia");
}

minuNimi();

// Noolefunktsioon
const minuNimi2 = () => {
    console.log("Liliia");
};

minuNimi2();
//Argument funct
function kuupaevEesti(kuupaev) {
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    const osad = kuupaev.split(".");
    const paev = osad[0];
    const kuu = kuud[parseInt(osad[1]) - 1];

    console.log(paev + ". " + kuu);
}

kuupaevEesti("19.07.25");

function arvutaArvud() {
    let arvud = prompt("Sisesta täisarvud komadega eraldatult:");
    arvud = arvud.split(",").map(Number);

    let koguarv = arvud.length;
    let summa = 0;

    arvud.forEach(arv => {
        summa += arv;
    });

    let keskmine = summa / koguarv;

    return {
        koguarv: koguarv,
        keskmine: keskmine
    };
}

const tulemus = arvutaArvud();

console.log("Arvude koguarv:", tulemus.koguarv);
console.log("Keskmine:", tulemus.keskmine);


const salajaneSonum = sonum => {
    return sonum.replace(/[aeiouõäöüAEIOUÕÄÖÜ]/g, "*");
};

console.log(salajaneSonum("Tere maailm!"));

const leiaUnikaalsedNimed = nimed => {
    return [...new Set(nimed)];
};

const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];

console.log(leiaUnikaalsedNimed(nimed));