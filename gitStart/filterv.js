const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event){
    const textEnterd = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName("fruit")
    for(let i=0; i < fruitItems.length; i++){
        const curFruitText = fruitItems[i].firsttChild.textContent.toLowerCase();
        if(curFruitText.indexOf(textEnterd) === -1){
            fruitItems[i].style.display = "none";
        }else{
            fruitItems[i].style.display = "flex";
        }

    }
})