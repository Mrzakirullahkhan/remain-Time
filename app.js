const lastDate = new Date("July 30, 2023 08:00:00").getTime();
const day = document.querySelector('#days');
const hour = document.querySelector('#hours');
const min = document.querySelector('#minute');
const sec = document.querySelector('#second');
const limit = document.querySelector('#limit')

// yaha pe ab me time set karunga 
let time = setInterval(() => {
    let todayTime = new Date().getTime();
    let totalDidifferenceOfTime = lastDate -todayTime;
    if(totalDidifferenceOfTime<0){
        clearInterval(time)
        limit.innerHTML ="The time is Over"
    }
    else{
        var m = Math.floor((totalDidifferenceOfTime % (1000 * 60 * 60)) / (1000 * 60));
        var h = Math.floor((totalDidifferenceOfTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var s = Math.floor((totalDidifferenceOfTime % (1000 * 60)) / 1000);
        var d = Math.floor(totalDidifferenceOfTime / (1000 * 60 * 60 * 24));
        day.innerHTML = d;
        hour.innerHTML = h;
        min.innerHTML = m;
        sec.innerHTML = s;
    }
}, 1000);
