const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=> {
    const time = new Date();
    
    if (time.getHours() +1 < 10) {
        hrs.innerHTML = `0${time.getHours() +1}`
    }else{
        hrs.innerHTML = time.getHours() +1;
    }if (time.getMinutes() < 10) {
        min.innerHTML = `0${time.getMinutes()}`
    }else {
        min.innerHTML = time.getMinutes();
    }if (time.getSeconds() < 10) {
        sec.innerHTML = `0${time.getSeconds()}`
    }else{
    sec.innerHTML = time.getSeconds();
    }
}, 1000)

