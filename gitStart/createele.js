
const mainHeading = document.getElementById('main-heading');
const subHeading = document.createElement('h3'); 
subHeading.textContent = "Buy high quality organic fruits online"; 
subHeading.style.fontStyle = "italic"; 
mainHeading.parentNode.insertBefore(subHeading, mainHeading.nextSibling); 


const basketHeading = document.getElementById('basket-heading'); 
const totalFruitsParagraph = document.createElement('p'); 
totalFruitsParagraph.textContent = "Total fruits: 4"; 
basketHeading.parentNode.insertBefore(totalFruitsParagraph, basketHeading.nextSibling); 


totalFruitsParagraph.id = "fruits-total";

