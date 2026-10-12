function valuutaKalk(){
    let vastus3 = document.getElementById('vastus3');
    let euro = document.getElementById('euro');
    let valuuta = document.getElementById('valuuta');

    const dollar = 1.12;
    const juann = 7.4992;
    const UAH = 50.326;

    if(valuuta.value == "dollar"){
        vastus3.innerHTML = euro.value + "€ = " + (euro.value * dollar).toFixed(2) + "$";
    }
    else if(valuuta.value == "juann"){
        vastus3.innerHTML = euro.value + "€ = " + (euro.value * juann).toFixed(2) + " ¥";
    }
    else if(valuuta.value == "UAH"){
        vastus3.innerHTML = euro.value + "€ = " + (euro.value * UAH).toFixed(2) + " ₴";
    }
    else {
        vastus3.innerHTML = "Sisesta valuuta õigesti";
    }
}