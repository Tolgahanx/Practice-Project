
const text = "Merhaba, benim adım Tolgahan!";

let index = 0;

function WriteScreen() {
    document.body.innerText = text.slice(0,index);
    index++;

    if(index > text.length-1){
        index = 0;
    }
}

setInterval(WriteScreen,100);