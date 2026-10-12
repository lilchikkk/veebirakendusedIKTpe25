function vanuseKalk(){
    let vastus4 = document.getElementById('vastus4');
    let synniaasta = document.getElementById('synniaasta');
    let vanusePilt = document.getElementById('vanusePilt');

    let vanus = 2026 - synniaasta.value;

    if (vanus >= 18) {
        vastus4.innerHTML = "Sinu vanus on: " + vanus + " (Oled täisealine!)";
        vanusePilt.src = "https://n1s1.hsmedia.ru/4b/5e/8e/4b5e8e5cf007192cf399ace6d4dff047/1706x1280_0x6lOY0pLP_8104071396783869025.jpg";
    } else {
        vastus4.innerHTML = "Sinu vanus on: " + vanus + " (Oled alaealine!)";
        vanusePilt.src = "https://n1s1.hsmedia.ru/52/d2/4b/52d24b0ef83997c50a8ddd21969e618b/561x700_1_9fac717a5538049852481fbea770f045@1066x1332_0xPve1yu1O_8828424506039203957.jpg.webp";
    }
}
function vanuseKalk(){
    let vastusKysimus = document.getElementById('vastusKysimus');
    let meeldibJah = document.getElementById('meeldibJah');

    if (meeldibJah.checked) {
        vastusKysimus.innerHTML = "Super! Igat vanust tuleb nautida";
    } else {
        vastusKysimus.innerHTML = "Ära muretse, iga vanus toob midagi uut ja huvitavat";
    }
}