function saiaKalk(){
    let vastus=document.getElementById("vastus");
    let saiatyype=document.getElementById("saiatyype");
    const juustu=2.00;
    const mooni=1.50;
    const pontsik=3.00;
    const kaneeli=1.30;

    let kogus=document.getElementById("kogus");
    let pilt=document.getElementById("pilt");

    //if valikud selectedIndex
    //1. rida selectedIndex = 0
    if(saiatyyp.selectedIndex===0){
        vastus.innerHTML="Palun vali saia tüüp"
        vastus.style.color="red";
        pilt.src="https://parnamaed.ee/img/rTU0D9Apl0duEhUntEF~pOw~e~e.png"
    }

    if(saiatyyp.selectedIndex===1){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>' +
            "Valitud kogus on "+ kogus.value + "tk" + '<br>' +
            "Kokku hind on "+(mooni*kogus.value).toFixed(2) + "€";

        vastus.style.color="blue";
        pilt.src="https://nami-nami.ee/files/comments/277909/B8163D44-5C84-4A3C-AB36-97AA86CC87A1.jpeg"
    }
    //To fixed (2) ümmardab 2 kohta peale komat

    if(saiatyyp.selectedIndex===2){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>' +
            "Valitud kogus on "+ kogus.value + "tk" + '<br>' +
            "Kokku hind on "+(juustu*kogus.value).toFixed(2) + "€";
        vastus.style.color="green";
        pilt.src="https://erlandia.ee/wp-content/uploads/2024/05/Juustusai.png"
    }

    if(saiatyyp.selectedIndex===3){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>' +
            "Valitud kogus on "+ kogus.value + "tk" + '<br>' +
            "Kokku hind on "+(pontsik*kogus.value).toFixed(2) + "€";
        vastus.style.color="purple";
        pilt.src="https://pontsik.ee/wp-content/uploads/2025/08/IMG_7770x.jpg"
    }

    if(saiatyyp.selectedIndex===4){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>' +
            "Valitud kogus on "+ kogus.value +"tk" + '<br>' +
            "Kokku hind on "+(kaneeli*kogus.value).toFixed(2) + "€";
        vastus.style.color="red";
        pilt.src="https://www.saialill.eu/wp-content/uploads/2021/03/kaneelirullid_korvis-copy-scaled.jpg"
    }
}