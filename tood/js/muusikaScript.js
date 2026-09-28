/ 1. checkbox'id - muusikud
function muusikudValik(){
    let vastus1 = document.getElementById("vastus1");
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");

    let valitud = "";
    if (m1.checked) {
        valitud += m1.value + ", ";
    }
    if (m2.checked) {
        valitud += m2.value + ", ";
    }
    if (m3.checked) {
        valitud += m3.value + ", ";
    }

    if (valitud === "") {
        valitud = "ühtegi muusikut pole valitud";
    } else {
        valitud = valitud.slice(0, -2);
    }

    vastus1.innerHTML = "Sinu valitud muusikud: " + valitud;
    vastus1.style.color = "blue";

    return valitud;
}

// 2. textarea - arvamus
function arvamusLugemine(){
    let arvamus = document.getElementById("arvamus");
    let vastus2 = document.getElementById("vastus2");

    let tekst = arvamus.value;
    vastus2.innerHTML = "Sinu arvamus: " + tekst;
    vastus2.style.color = "darkgreen";

    return tekst;
}

// 3. number - tunnid
function tunnidLugemine(){
    let tund = document.getElementById("tund");
    let vastus3 = document.getElementById("vastus3");

    let tunnid = tund.value;
    vastus3.innerHTML = "Sa kuulad muusikat " + tunnid + " tundi päevas";
    vastus3.style.color = "purple";

    return tunnid;
}

// 4. radio - raadio jah/ei
function raadioValik(){
    let vastus4 = document.getElementById("vastus4");
    let raadioJah = document.getElementById("raadioJah");
    let raadioEi = document.getElementById("raadioEi");

    let raadio = "";
    if (raadioJah.checked) {
        raadio = raadioJah.value;
    } else if (raadioEi.checked) {
        raadio = raadioEi.value;
    } else {
        raadio = "vastust pole";
    }

    vastus4.innerHTML = "Raadio kuulamine: " + raadio;
    vastus4.style.color = "orange";

    return raadio;
}

// 5. text - raadiojaamad
function jaamadLugemine(){
    let jaamad = document.getElementById("jaamad");
    let vastus5 = document.getElementById("vastus5");

    let tekst = jaamad.value;
    vastus5.innerHTML = "Sinu nimetatud jaamad: " + tekst;
    vastus5.style.color = "brown";

    return tekst;
}

// 6. select - stiil
function stiilValik(){
    let stiil = document.getElementById("stiil");
    let vastus6 = document.getElementById("vastus6");

    let valitud = stiil.value;
    if (valitud === "") {
        valitud = "stiili pole valitud";
    }

    vastus6.innerHTML = "Sinu vastus: " + valitud;
    vastus6.style.color = "red";

    return valitud;
}

// 7. nupp "Saada" - kokkuvõte
function saada(){
    let kokkuvote = document.getElementById("kokkuvote");

    let muusikud = muusikudValik();
    let arvamus = arvamusLugemine();
    let tunnid = tunnidLugemine();
    let raadio = raadioValik();
    let jaamad = jaamadLugemine();
    let stiil = stiilValik();

    kokkuvote.innerHTML = '<strong>Kokkuvõte:</strong><br>'
        + 'Muusikud: ' + muusikud + '<br>'
        + 'Arvamus koolis muusika kohta: ' + arvamus + '<br>'
        + 'Tunde päevas: ' + tunnid + '<br>'
        + 'Raadio kuulamine: ' + raadio + '<br>'
        + 'Raadiojaamad: ' + jaamad + '<br>'
        + 'Lemmikstiil: ' + stiil;
    kokkuvote.style.backgroundColor = "pink";
}

// 8. nupp "Puhasta"
function puhasta(){
    document.getElementById("vorm").reset();

    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";

    let kokkuvote = document.getElementById("kokkuvote");
    kokkuvote.innerHTML = "";
    kokkuvote.style.backgroundColor = "";
}