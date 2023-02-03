const playBtn = document.getElementById("#playBtn");
const restartBtn = document.getElementById("#restartBtn");



let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;


function count (){
    seconds++;
    if(seconds == 60){
        minutes++
        seconds = 0;
        if(minutes == 60){
            hours++
            minutes = 0;
        }
    }

    if(seconds<10){
        leadingseconds = '0' + seconds;
    }else{
        leadingseconds = seconds;
    }

    if(minutes<10){
        leadingminutes = '0' + minutes;
    }else{
        leadingminutes = minutes;
    }

    if(hours<10){
        leadinghours = '0' + hours;
    }else{
        leadinghours = hours;
    }
    

    let displayTimer = document.getElementById("#timer").innerText = 
    leadinghours + ":" + leadingminutes + ":" + leadingseconds;
    

}
    let timerStatus = 'stopped';
    let timerInterval = null;

playBtn.addEventListener('click', function(){

    
    
    if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(count,1000);
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause','orange');
        timerStatus = 'started';
    }else{
        
        window.clearInterval(timerInterval);
        playBtn.classList.remove('fa-pause','orange');
        playBtn.classList.add('fa-play');
        timerStatus = 'stopped';

    }
    
})

restartBtn.addEventListener('click', function(){

    document.getElementById('#timer').innerText = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0
})



