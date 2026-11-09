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
function smail() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        //pea
        t.beginPath();
        t.fillStyle = "yellow";
        t.arc(150, 200, 100, 0, 2 * Math.PI);
        t.fill();
        t.stroke();
        //vasak silm
        t.beginPath();
        t.fillStyle = "black";
        t.arc(110, 160, 15, 0, 2 * Math.PI);
        t.fill();
        //parem silm
        t.beginPath();
        t.arc(190, 160, 10, 0, 2 * Math.PI);
        t.fill();
        //nina
        t.fillStyle = "orange";
        t.fillRect(145, 180, 10, 30);
        //vasak kõrv
        t.fillStyle = "yellow";
        t.fillRect(35, 180, 15, 40);
        //parem kõrv
        t.fillRect(250, 180, 15, 40);
        //suu
        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 4;
        t.moveTo(135, 225); //alguspunkt
        t.lineTo(165, 225); //lõpppunkt
        t.stroke();
    }
}