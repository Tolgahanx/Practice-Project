setInterval(setClock,1000);

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')


function setClock(){
    let time = new Date();
    
    let secondsRatio = time.getSeconds() / 60
    let minutesRatio = time.getMinutes() / 60
    let hoursRatio = time.getHours() / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation (element, rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio * 360);
}

setClock()