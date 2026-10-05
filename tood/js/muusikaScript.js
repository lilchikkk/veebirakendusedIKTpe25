// 1. checkbox - muusikud (onchange)
function muusikudValik() {
    let vastus1 = document.getElementById("vastus1");
    let valikud = document.getElementsByName("muusik");

    let pildid = {
        "Metallica": "muusikakusitlusPildid/metalika.jpg",
        "Queen": "muusikakusitlusPildid/queen.jpg",
        "ABBA": "muusikakusitlusPildid/abba.png",
        "Eminem": "muusikakusitlusPildid/eminem.webp",
        "Tuuli": "muusikakusitlusPildid/tuuli.jpg"
    };

    let lingid = {
        "Metallica": "https://youtu.be/CHIWNDAwTqQ?si=OfZ9NXedjQzSHWEv",
        "Queen": "https://youtu.be/n54E75UZUnM?si=sjbvUhv5ilxRcLI6",
        "ABBA": "https://youtu.be/XEjLoHdbVeE?si=9xOX47fC_xBfc-RM",
        "Eminem": "https://youtu.be/i2_kPKLJkBY?si=hNvfJRPJKxyIahpI",
        "Tuuli": "https://youtu.be/eYzAjDG1_qY?si=NDWfb__d-vmEay5B"
    };

    let muusikud = "";
    let kokku = 0;
    for (let i = 0; i < valikud.length; i++) {
        if (valikud[i].checked) {
            muusikud += valikud[i].value + ", ";
            kokku++;
        }
    }
    if (muusikud === "") {
        muusikud = "pole valitud";
    }

    vastus1.innerHTML = "Sinu valitud muusikud: " + muusikud + "<br>Valitud: " + kokku + " ansamblit";
    vastus1.style.color = "green";

    let pildid1 = document.getElementById("pildid1");
    pildid1.innerHTML = "";
    for (let i = 0; i < valikud.length; i++) {
        if (valikud[i].checked) {
            let nimi = valikud[i].value;
            pildid1.innerHTML += '<figure style="display:inline-block; text-align:center; margin:5px;">'
                + '<img src="' + pildid[nimi] + '" width="100">'
                + '<figcaption><strong>' + nimi + '</strong><br>'
                + '<a href="' + lingid[nimi] + '" target="_blank">Kuula nende laulu siin</a>'
                + '</figcaption></figure>';
        }
    }

    return muusikud;
}

// 2. textarea - arvamus (oninput)
function arvamusLugemine() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    let tekst = arvamus.value;
    vastus2.innerHTML = "Sinu arvamus: " + tekst;
    vastus2.style.color = "blue";

    return tekst;
}

// 3. number - tunnid päevas (oninput)
function tunnidLugemine() {
    let vastus3 = document.getElementById("vastus3");
    let tunnid = document.getElementById("tunnid");

    let tund = tunnid.value;


    let hinnang = "";
    if (tund !== "") {
        if (tund < 2) {
            hinnang = "Vähe";
        } else if (tund <= 5) {
            hinnang = "Paras";
        } else {
            hinnang = "Väga palju!";
        }
    }

    vastus3.innerHTML = "Sa kuulad muusikat " + tund + " tundi päevas. " + hinnang;
    vastus3.style.color = "red";

    return tund;
}

// 4. radio - raadio jah/ei
function raadioValik() {
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let raadio = "";
    if (jah.checked) {
        raadio = jah.value;
    } else if (ei.checked) {
        raadio = ei.value;
    } else {
        raadio = "pole valitud";
    }

    vastus4.innerHTML = "Raadio kuulamine: " + raadio;
    vastus4.style.color = "purple";

    let pildid4 = document.getElementById("pildid4");
    if (jah.checked) {
        pildid4.innerHTML = '<img src="muusikakusitlusPildid/yes.png" width="80">';
    } else if (ei.checked) {
        pildid4.innerHTML = '<img src="muusikakusitlusPildid/no.png" width="80">';
    } else {
        pildid4.innerHTML = "";
    }

    return raadio;
}

// 5. text - raadiojaamad (oninput)
function jaamadLugemine() {
    let vastus5 = document.getElementById("vastus5");
    let jaamad = document.getElementById("jaamad");

    let tekst = jaamad.value;
    vastus5.innerHTML = "Sinu nimetatud jaamad: " + tekst;
    vastus5.style.color = "orange";

    return tekst;
}


function stiilValik() {
    let vastus6 = document.getElementById("vastus6");
    let stiil = document.getElementById("stiil");


    let valitud = "pole valitud";
    if (stiil.selectedIndex !== 0) {
        valitud = stiil.value;
    }

    vastus6.innerHTML = "Sinu vastus: " + valitud;
    vastus6.style.color = "teal";

    return valitud;
}


function saada() {
    let kokkuvote = document.getElementById("kokkuvote");

    let muusikud = muusikudValik();
    let arvamus = arvamusLugemine();
    let tunnid = tunnidLugemine();
    let raadio = raadioValik();
    let jaamad = jaamadLugemine();
    let stiil = stiilValik();

    kokkuvote.innerHTML = '<strong>Kokkuvõte:</strong><br>'
        + 'Sinu valitud muusikud: ' + muusikud + '<br>'
        + 'Sinu arvamus: ' + arvamus + '<br>'
        + 'Sa kuulad muusikat ' + tunnid + ' tundi päevas<br>'
        + 'Raadio kuulamine: ' + raadio + '<br>'
        + 'Sinu nimetatud jaamad: ' + jaamad + '<br>'
        + 'Sinu vastus: ' + stiil;

    kokkuvote.style.backgroundColor = "pink";
    kokkuvote.style.padding = "10px";

    let esinejad = document.getElementById("esinejad");
    let pildidHTML = document.getElementById("pildid1").innerHTML;
    if (pildidHTML !== "") {
        esinejad.innerHTML = "<strong>Esinejad:</strong><br>" + pildidHTML;
        esinejad.style.border = "1px solid gray";
        esinejad.style.padding = "10px";
        esinejad.style.marginTop = "10px";
    } else {
        esinejad.innerHTML = "";
        esinejad.style.border = "none";
        esinejad.style.padding = "0";
    }
}


function puhasta() {
    let ids = ["vastus1", "vastus2", "vastus3", "vastus4", "vastus5", "vastus6", "kokkuvote", "pildid1", "esinejad", "pildid4"];
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }
    document.getElementById("kokkuvote").style.backgroundColor = "transparent";
    document.getElementById("kokkuvote").style.padding = "0";
    document.getElementById("esinejad").style.border = "none";
    document.getElementById("esinejad").style.padding = "0";
}