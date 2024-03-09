const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.margin = '30px';
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';


const fruitItems = document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++){
    fruitItems[i].style.backgroundColor = 'lightgrey';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';
}
const EvenfruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<EvenfruitItems.length;i++){
    EvenfruitItems[i].style.backgroundColor = 'darkred';
    EvenfruitItems[i].style.color = 'white';
}
