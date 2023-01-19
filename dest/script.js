/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var button = document.getElementById('Plan')
var clsBTn = document.getElementById('closebtn')
var slide = document.getElementById('pgcover')


button.addEventListener('click', () => {
  slide.classList.add('display');
  
})

clsBTn.addEventListener('click', () => {
    slide.classList.remove('display');
    
  })
  

 
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

 


// var cardScale = document.getElementById('card1');
// var headingClch = document.getElementById('heading1');
// var priceClch = document.getElementById('price1');
// var changeCl = document.getElementById('change1');

// cardScale.addEventListener("click", () => { 
//     cardScale.classList.toggle("card-trsm");
//     headingClch.classList.toggle("clr-chg-onhv");
//     priceClch.classList.toggle("clr-chg-onhv");
//     changeCl.classList.toggle("clr-chg-onhv");

// })

// var cardScale1 = document.getElementById('card2');
// var headingClch1 = document.getElementById('heading2');
// var priceClch1 = document.getElementById('price2');
// var changeCl1 = document.getElementById('change2');

// cardScale1.addEventListener("click", () => { 
//     cardScale1.classList.toggle("card-trsm");
//     headingClch1.classList.toggle("clr-chg-onhv");
//     priceClch1.classList.toggle("clr-chg-onhv");
//     changeCl1.classList.toggle("clr-chg-onhv");
// 1
// })

// var cardScale2 = document.getElementById('card3');
// var headingClch2= document.getElementById('heading3');
// var priceClch2 = document.getElementById('price3');
// var changeCl2 = document.getElementById('change3');


// cardScale2.addEventListener("click", () => { 
//     cardScale2.classList.toggle("card-trsm");
//     headingClch2.classList.toggle("clr-chg-onhv");
//     priceClch2.classList.toggle("clr-chg-onhv");
//     changeCl2.classList.toggle("clr-chg-onhv");

// })
   
/******/ })()
;