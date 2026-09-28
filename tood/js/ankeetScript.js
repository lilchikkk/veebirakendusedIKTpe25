// teksti kasti lugemine
function nimiLugemine(){
    let nimi = document.getElementById("nimi");
    let vastus = document.getElementById("vastus");

    // innerHTML - dünaamiliselt genereerib teksti html'ina
    let tekst = nimi.value;
    vastus.innerHTML = "Tere hommikust, " + tekst;
    vastus.style.color = "red";

    return tekst; // tagastab sisestatud nime
}

// radionupude valikud
function suguValik(){
    let vastus2 = document.getElementById("vastus2");
    let naine = document.getElementById("naine");
    let mees = document.getElementById("mees");
    let muu = document.getElementById("muu");

    let sugu = "";
    if (naine.checked) {
        sugu = naine.value;
    } else if (mees.checked) {
        sugu = mees.value;
    } else if (muu.checked) {
        sugu = muu.value;
    } else {
        sugu = "palun vali sugu";
    }

    let tulemus = "Valitud sugu on: " + sugu;
    vastus2.innerHTML = tulemus;
    vastus2.style.color = "green";

    return tulemus; // tagastab tulemuse teksti
}

//checkbox'i valik
function sportValik(){
    let vastus3 = document.getElementById("vastus3");
    let ujumine = document.getElementById("ujumine");
    let poks = document.getElementById("poks");
    let suusatamine = document.getElementById("suusatamine");
    let uisutamine = document.getElementById("uisutamine");
    let jooksmine = document.getElementById("jooksmine");

    let sport = "";
    if(ujumine.checked){
        sport +=ujumine.value +', ';
    }
    if(poks.checked){
        sport +=poks.value +', ';
    }
    if(suusatamine.checked){
        sport +=suusatamine.value +', ';
    }
    if(jooksmine.checked){
        sport +=jooksmine.value +', ';
    }
    if(uisutamine.checked){
        sport +=uisutamine.value +', ';
    }
    if(sport==""){
        sport= "sa ei tee sporti";
    }
    vastus3.innerHTML=sport;

    return sport; // tagastab spordialade nimekirja
}

function tervitus(){
    let vastus4 = document.getElementById("vastus4"); // otsib vastus4 elemendi

    let nimi = nimiLugemine(); // kutsub funktsiooni sulgudega ()
    let sugu = suguValik();
    let spordiala = sportValik();

    vastus4.innerHTML = 'Sisestatud nimi on: ' + nimi + '<br>'
        + sugu + '<br>'
        + 'Spordialad: ' + spordiala;
     vastus4.style.backgroundColor = "pink"
}
function puhasta(){
    vastus.innerHTML="";
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}