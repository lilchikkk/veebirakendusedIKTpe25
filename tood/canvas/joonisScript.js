//sirge joon
function sirgeJoon() {
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50, 50); //alguspunkt
        t.lineTo(150, 200); //lõpppunkt
        t.stroke();
    }
}
function puhasta() {
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}

//kolmnurk
function kolmnurk() {
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green"; //taust
        t.lineWidth = 2;
        t.moveTo(50, 50); //alguspunkt
        t.lineTo(150, 200);
        t.lineTo(50, 200);
        t.lineTo(50, 50); //lõpppunkt
        t.stroke();
        t.fill();
    }
}

//ristkülik
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "olive";
        t.fillRect(100, 50, laius.value, korgus.value); // alguspunkt - x, y, laius, kõrgus
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = varv.value;
        t.arc(100, 50, r.value, 0,  2*Math.PI, true); // alguspunkt - x, y, radius, 2*180 kraadi
        t.fill();
    }
}

//smail ('_')
function smailPea() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "yellow";
        t.arc(150, 200, 100, 0, 2 * Math.PI);
        t.fill();
        t.stroke();
    }
}

function smailSilmad() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        //vasak silm
        t.beginPath();
        t.fillStyle = "black";
        t.arc(110, 160, 15, 0, 2 * Math.PI);
        t.fill();
        //parem silm
        t.beginPath();
        t.arc(190, 160, 10, 0, 2 * Math.PI);
        t.fill();
    }
}

function smailNina() {
    const tahvel = document.getElementById("tahvel");
    const ninaLaius = document.getElementById("ninaLaius");
    const ninaKorgus = document.getElementById("ninaKorgus");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "orange";
        t.fillRect(145, 180, ninaLaius.value, ninaKorgus.value);
    }
}

function smailKorvad() {
    const tahvel = document.getElementById("tahvel");
    const korvLaius = document.getElementById("korvLaius");
    const korvKorgus = document.getElementById("korvKorgus");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "yellow";
        let w = Number(korvLaius.value);
        let h = Number(korvKorgus.value);

        // vasak kõrv
        t.fillRect(50 - w, 180, w, h);

        // parem kõrv
        t.fillRect(250, 180, w, h);
    }
}

function smailSuu() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 4;
        t.arc(150, 200, 50, 0, Math.PI, false);
        t.stroke();
    }
}

//pilt failist
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        let fail = new Image();
        fail.src="https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg"
        fail.onload=()=>{
            t.drawImage(fail, 50, 10, 80, 80);
        }
    }
}

function smail() {
    smailPea();
    smailKorvad();
    smailSilmad();
    smailNina();
    smailSuu();
}