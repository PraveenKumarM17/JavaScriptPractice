let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();

    // getting hours, min, sec

    const ms = date.getMilliseconds();
    let ss = date.getSeconds();
    let mm = date.getMinutes();
    let hh = date.getHours();

    const s = ss + ms/1000;
    const m = mm + s/60;
    const h = (hh % 12) + m/60;

    let sRotation = 6*s;
    let mRotation = 6*m;
    let hRotation = 30*h;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);