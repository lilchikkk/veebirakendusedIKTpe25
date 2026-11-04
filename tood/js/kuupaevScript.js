// näitab teksti lehel
function kuva(tekst) {
    document.getElementById('vastus').innerHTML += "<p>" + tekst + "</p>";
}

// Nupp "TÄNA ON"
function tanaOn() {
    document.getElementById('vastus').innerHTML = "";

    const now = new Date();

    // get-meetodid
    const paev = now.getDate(); //tagastab kuupäeva päeva
    const kuu = now.getMonth(); //tagastab kuu numbri (0-11)
    const aasta = now.getFullYear(); //tagastab aasta
    const np = now.getDay(); //tagastab nädalapäeva numbri (0-6), kus 0 on pühapäev ja 6 on laupäev

    const tunnid = now.getHours(); //tagastab tunnid (0-23)
    const minutid = now.getMinutes(); //tagastab minutid (0-59)

    console.log("Täna on " + paev + ". päev");
    console.log("Kuu number on " + kuu);
    console.log("Aasta on " + aasta);
    console.log("Täna on " + np);
    console.log("Kell on " + tunnid + ":" + minutid);

    // kuupäev ja kellaaeg sõnalises vormis
    const kp = now.toLocaleDateString();
    const kellaaeg = now.toLocaleTimeString();
    const kp_kell = now.toLocaleString();

    console.log(kp);
    console.log(kellaaeg);
    console.log(kp_kell);

    kuva("Kuupäev: " + kp);
    kuva("Kellaaeg: " + kellaaeg);
    kuva("Kuupäev ja kellaaeg: " + kp_kell);
}

// Nupp "Minu sünnipäevani"
