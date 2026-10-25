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
function synnipaevani() {
    document.getElementById('vastus').innerHTML = "";

    const sisend = document.getElementById('synnipaev').value;
    if (sisend === "") {
        kuva("Vali enne oma sünnikuupäev.");
        return;
    }

    // sisend on kujul 2000-06-26
    const osad = sisend.split("-");
    const synniKuu = Number(osad[1]) - 1; //kuu on 0-11, seepärast -1
    const synniPaev = Number(osad[2]);

    const now = new Date();

    // kui sünnipäev on täna
    if (now.getDate() === synniPaev && now.getMonth() === synniKuu) {
        console.log("Palju õnne sünnipäevaks!");
        kuva("Palju õnne sünnipäevaks!");
        return;
    }

    // selle aasta sünnipäev
    let before = new Date(now.getFullYear(), synniKuu, synniPaev);

    // kui sünnipäev on selleks aastaks läbi, võtame järgmise aasta
    if (before < now) {
        before = new Date(now.getFullYear() + 1, synniKuu, synniPaev);
    }

    const ms = before.getTime() - now.getTime();
    const paevad = Math.ceil(ms / (1000 * 60 * 60 * 24)); //sekundid * minutid * tunnid * päevad

    console.log("Sünnipäevani päevades:", paevad);
    kuva("Sünnipäevani on jäänud " + paevad + " päeva");
}