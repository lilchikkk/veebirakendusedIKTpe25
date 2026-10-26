
const raamatuTulemus = document.getElementById("raamatuTulemus");
const raamatukoguTulemus = document.getElementById("raamatukoguTulemus");

// 1. Raamatu objekt
const raamat = {
    pealkiri: "Harry Potter",
    autor: "J. K. Rowling",
    aasta: 1997,

    kuvaKirjeldus: function() {
        return this.pealkiri + " - " + this.autor +
            ", ilmumisaasta: " + this.aasta;
    },

    muudaAastat: function(uusAasta) {
        this.aasta = uusAasta;
        return "Uus ilmumisaasta: " + this.aasta;
    }
};

console.log("RAAMATU OBJEKT");
console.log(raamat.kuvaKirjeldus());
raamatuTulemus.innerHTML += "<p>" + raamat.kuvaKirjeldus() + "</p>";

console.log(raamat.muudaAastat(2000));
raamatuTulemus.innerHTML += "<p>" + raamat.muudaAastat(2000) + "</p>";

// 2. Raamatukogu objekt
const raamatukogu = {
    raamatud: [
        raamat,
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Da Vinci kood", autor: "Dan Brown", aasta: 2003 }
    ],

    kuvaRaamatud: function() {
        return this.raamatud.map(function(raamat) {
            return raamat.pealkiri + " - " + raamat.autor +
                " (" + raamat.aasta + ")";
        }).join("<br>");
    },

    lisaRaamat: function(uusRaamat) {
        this.raamatud.push(uusRaamat);
        return "Lisati raamat: " + uusRaamat.pealkiri;
    },

    kuvaKoguarv: function() {
        return "Raamatute koguarv: " + this.raamatud.length;
    },

    loendaParast2000: function() {
        return this.raamatud.filter(function(raamat) {
            return raamat.aasta > 2000;
        }).length;
    },

    // otsib raamatuid valitud autori järgi
    otsiAutoriJargi: function(autor) {
        return this.raamatud.filter(function(raamat) {
            return raamat.autor === autor;
        });
    }
};

console.log("RAAMATUKOGU");
console.log("Kõik raamatud:");
console.log(raamatukogu.raamatud);
raamatukoguTulemus.innerHTML += "<h2>Kõik raamatud</h2>";
raamatukoguTulemus.innerHTML += "<p>" + raamatukogu.kuvaRaamatud() + "</p>";

const lisamiseTulemus = raamatukogu.lisaRaamat({
    pealkiri: "Väike prints",
    autor: "Antoine de Saint-Exupéry",
    aasta: 1943
});
console.log(lisamiseTulemus);
raamatukoguTulemus.innerHTML += "<p>" + lisamiseTulemus + "</p>";

console.log(raamatukogu.kuvaKoguarv());
raamatukoguTulemus.innerHTML += "<p>" + raamatukogu.kuvaKoguarv() + "</p>";

const parast2000 = raamatukogu.loendaParast2000();
console.log("Pärast 2000. aastat ilmunud raamatuid: " + parast2000);
raamatukoguTulemus.innerHTML +=
    "<p>Pärast 2000. aastat ilmunud raamatuid: " + parast2000 + "</p>";

const autoriRaamatud = raamatukogu.otsiAutoriJargi("Oskar Luts");
console.log("Oskar Lutsu raamatud:", autoriRaamatud);
raamatukoguTulemus.innerHTML += "<h2>Oskar Lutsu raamatud</h2>";
raamatukoguTulemus.innerHTML += "<p>" +
    autoriRaamatud.map(function(raamat) {
        return raamat.pealkiri + " - " + raamat.aasta;
    }).join("<br>") + "</p>";


raamatukoguTulemus.innerHTML += "<h2>Raamatute nimekiri pärast lisamist</h2>";
raamatukoguTulemus.innerHTML += "<p>" + raamatukogu.kuvaRaamatud() + "</p>";
