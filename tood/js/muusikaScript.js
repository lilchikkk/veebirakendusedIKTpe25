// 1. checkbox - muusikud (onchange)
function muusikudValik() {
    let vastus1 = document.getElementById("vastus1");
    let valikud = document.getElementsByName("muusik");

    let muusikud = "";
    for (let i = 0; i < valikud.length; i++) {
        if (valikud[i].checked) {
            muusikud += valikud[i].value + ", ";
        }
    }
    if (muusikud === "") {
        muusikud = "pole valitud";
    }

    vastus1.innerHTML = "Sinu valitud muusikud: " + muusikud;
    vastus1.style.color = "green";

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
    vastus3.innerHTML = "Sa kuulad muusikat " + tund + " tundi päevas";
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
}


function puhasta() {
    let ids = ["vastus1", "vastus2", "vastus3", "vastus4", "vastus5", "vastus6", "kokkuvote"];
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }
    document.getElementById("kokkuvote").style.backgroundColor = "transparent";
    document.getElementById("kokkuvote").style.padding = "0";
}