const cups = document.querySelectorAll('.glass');
const percentage = document.getElementById('percentage')


cups.forEach((cup,index) => {
    cup.addEventListener('click', ()=> {
        highlightCups(index);
    })
})


function highlightCups(index) {
    if(index === 7 && cups[index].classList.contains('full')) index--;
    else if(cups[index].classList.contains('full')&& !cups[index].nextElementSibling.classList.contains('full')) index--

    cups.forEach((cup, index2)=> {
        if(index2 <= index){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBottle()

}

function updateBottle() {
    const fullCups = document.querySelectorAll('.glass.full').length
    const totalCups = cups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 345}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        
    }




}