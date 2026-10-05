//random pilt mis tuleb piltide masivist
function randomPilt() {
    const pildid = [
        '../pildid/1.png',
        '../pildid/2.png',
        '../pildid/3.png',
        '../pildid/tyhi.png',
    ];
    //random pilt
    //math.floor -ümardab täisarvuni
    const pilt = Math.floor(Math.random() * pildid.length);
    const rpilt = pildid[pilt];
    const randomPilt = document.getElementById("randomPilt");

    randomPilt.src = rpilt;
}