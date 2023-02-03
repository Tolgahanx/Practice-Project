

let dropdownLink = document.getElementById('hastanelerimiz');

dropdownLink.addEventListener('onmouseover', function(){

  

} )





/*swiper */

const swiper = new Swiper('#swiper-1 ', {
  // Optional parameters
    loop: true,
    speed: 1000,
  // If we need pagination
  pagination: {
    el: '#swiper-1 .swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#nav-right',
    prevEl: '#nav-left',
  },

  // And if we need scrollbar
});