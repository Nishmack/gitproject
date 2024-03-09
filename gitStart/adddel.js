const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');




form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>';
     const newLiText = document.createTextNode(fruitToAdd.value);
     newLi.appendChild(newLiText);
     newLi.className = 'fruit';
     const deleteButton = document.createElement('button');
     const deleteButtonText = document.createTextNode('x');
     deleteButton.appendChild(deleteButtonText);
     deleteButton.className = 'delete-btn';
     newLi.appendChild(deleteButton);

    
     const editBtn = document.createElement('button')
     const editBtnText = document.createTextNode('edit');
     editBtn.appendChild(editBtnText);
     editBtn.className = 'edit-btn';
     newLi.appendChild(editBtn);



    fruits.appendChild(newLi);
    
    
    
    
})




fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDele = event.target.parentElement;
        fruits.removeChild(fruitToDele);

    };


});
