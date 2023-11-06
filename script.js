const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateClock(){
    let hrs = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = "AM"

    if(hrs > 12){
        hrs = hrs - 12;
        am = "PM";
    }
    else{
        am = "AM";
    }

    hrs = hrs < 10 ? "0"+ hrs : hrs;
    min = min < 10 ? "0"+ min : min;
    sec = sec < 10 ? "0"+ sec : sec;

    hours.innerText = hrs;
    minutes.innerText = min;
    seconds.innerText = sec;
    ampm.innerText = am;
    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();