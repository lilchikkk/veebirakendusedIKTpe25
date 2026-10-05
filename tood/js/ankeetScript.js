// 1. checkbox - muusikud
function muusikudValik(){
    let vastus1 = document.getElementById("vastus1");
    let pildid1 = document.getElementById("pildid1");
    let metallica = document.getElementById("metallica");
    let queen = document.getElementById("queen");
    let abba = document.getElementById("abba");
    let eminem = document.getElementById("eminem");
    let tuuli = document.getElementById("tuuli");

    let muusikud = "";
    let pildid = "";
    let kokku = 0;

    if(metallica.checked){
        muusikud += metallica.value + ", ";
        kokku++;
        pildid += '<p><img src="muusikakusitlusPildid/metalika.jpg" width="100"><br>'
            + '<b>Metallica</b><br>'
            + '<a href="https://youtu.be/CHIWNDAwTqQ" target="_blank">Kuula laulu siin</a></p>';
    }
    if(queen.checked){
        muusikud += queen.value + ", ";
        kokku++;
        pildid += '<p><img src="muusikakusitlusPildid/queen.jpg" width="100"><br>'
            + '<b>Queen</b><br>'
            + '<a href="https://youtu.be/n54E75UZUnM" target="_blank">Kuula laulu siin</a></p>';
    }
    if(abba.checked){
        muusikud += abba.value + ", ";
        kokku++;
        pildid += '<p><img src="muusikakusitlusPildid/abba.png" width="100"><br>'
            + '<b>ABBA</b><br>'
            + '<a href="https://youtu.be/XEjLoHdbVeE" target="_blank">Kuula laulu siin</a></p>';
    }
    if(eminem.checked){
        muusikud += eminem.value + ", ";
        kokku++;
        pildid += '<p><img src="muusikakusitlusPildid/eminem.webp" width="100"><br>'
            + '<b>Eminem</b><br>'
            + '<a href="https://youtu.be/i2_kPKLJkBY" target="_blank">Kuula laulu siin</a></p>';
    }
    if(tuuli.checked){
        muusikud += tuuli.value + ", ";
        kokku++;
        pildid += '<p><img src="muusikakusitlusPildid/tuuli.jpg" width="100"><br>'
            + '<b>Tuuli</b><br>'
            + '<a href="https://youtu.be/eYzAjDG1_qY" target="_blank">Kuula laulu siin</a></p>';
    }
    if(muusikud == ""){
        muusikud = "pole valitud";
    }

    vastus1.innerHTML = "Sinu valitud muusikud: " + muusikud + "<br>Valitud: " + kokku + " ansamblit";
    vastus1.style.color = "green";
    pildid1.innerHTML = pildid;

    return muusikud;
}

// 2. textarea - arvamus
function arvamusLugemine(){
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    let tekst = arvamus.value;
    vastus2.innerHTML = "Sinu arvamus: " + tekst;
    vastus2.style.color = "blue";

    return tekst;
}

// 3. number - tunnid päevas
function tunnidLugemine(){
    let vastus3 = document.getElementById("vastus3");
    let tunnid = document.getElementById("tunnid");

    let tund = tunnid.value;
    let hinnang = "";
    if(tund != ""){
        if(tund < 2){
            hinnang = "Vähe";
        } else if(tund <= 5){
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
function raadioValik(){
    let vastus4 = document.getElementById("vastus4");
    let pildid4 = document.getElementById("pildid4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let raadio = "";
    if(jah.checked){
        raadio = jah.value;
        pildid4.innerHTML = '<img src="muusikakusitlusPildid/yes.png" width="80">';
    } else if(ei.checked){
        raadio = ei.value;
        pildid4.innerHTML = '<img src="muusikakusitlusPildid/no.png" width="80">';
    } else {
        raadio = "pole valitud";
        pildid4.innerHTML = "";
    }

    vastus4.innerHTML = "Raadio kuulamine: " + raadio;
    vastus4.style.color = "purple";

    return raadio;
}

// 5. text - raadiojaamad
function jaamadLugemine(){
    let vastus5 = document.getElementById("vastus5");
    let jaamad = document.getElementById("jaamad");

    let tekst = jaamad.value;
    vastus5.innerHTML = "Sinu nimetatud jaamad: " + tekst;
    vastus5.style.color = "orange";

    return tekst;
}

// 6. select - muusika stiil
function stiilValik(){
    let vastus6 = document.getElementById("vastus6");
    let stiil = document.getElementById("stiil");

    //1. rida loendis see on 0 rida JS
    let valitud = "pole valitud";
    if(stiil.selectedIndex != 0){
        valitud = stiil.value;
    }

    vastus6.innerHTML = "Sinu vastus: " + valitud;
    vastus6.style.color = "teal";

    return valitud;
}

// nupp Saada
function saada(){
    let kokkuvote = document.getElementById("kokkuvote");
    let esinejad = document.getElementById("esinejad");
    let pildid1 = document.getElementById("pildid1");

    let muusikud = muusikudValik();
    let arvamus = arvamusLugemine();
    let tunnid = tunnidLugemine();
    let raadio = raadioValik();
    let jaamad = jaamadLugemine();
    let stiil = stiilValik();


    if(muusikud == "pole valitud" || arvamus == "" || tunnid == "" || raadio == "pole valitud" || jaamad == "" || stiil == "pole valitud"){
        alert("Palun vasta kõikidele küsimustele!");
        return;
    }

    kokkuvote.innerHTML = '<strong>Kokkuvõte:</strong><br>'
        + 'Sinu valitud muusikud: ' + muusikud + '<br>'
        + 'Sinu arvamus: ' + arvamus + '<br>'
        + 'Sa kuulad muusikat ' + tunnid + ' tundi päevas<br>'
        + 'Raadio kuulamine: ' + raadio + '<br>'
        + 'Sinu nimetatud jaamad: ' + jaamad + '<br>'
        + 'Sinu vastus: ' + stiil;
    kokkuvote.style.backgroundColor = "pink";
    kokkuvote.style.padding = "10px";

    // esinejad - pildid roosa kasti all
    esinejad.innerHTML = "<strong>Esinejad:</strong><br>" + pildid1.innerHTML;
    esinejad.style.border = "1px solid gray";
    esinejad.style.padding = "10px";
    esinejad.style.marginTop = "10px";
}

// nupp Puhasta
function puhasta(){
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("pildid1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("pildid4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";

    document.getElementById("kokkuvote").innerHTML = "";
    document.getElementById("kokkuvote").style.backgroundColor = "transparent";
    document.getElementById("kokkuvote").style.padding = "0";

    document.getElementById("esinejad").innerHTML = "";
    document.getElementById("esinejad").style.border = "none";
    document.getElementById("esinejad").style.padding = "0";
}