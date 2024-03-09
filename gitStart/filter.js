// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const fruitInput = document.getElementById('fruit-to-add');
const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('id', 'description');
descriptionInput.setAttribute('placeholder', 'Enter fruit description...');
form.insertBefore(descriptionInput, form.childNodes[2]); // Insert before the button


// Show the fruit description in italics on the next line
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const fruitName = fruitInput.value.trim();
    const fruitDescription = descriptionInput.value.trim();
    
    if (fruitName !== '' && fruitDescription !== '') { // Check if both name and description are provided
      const fruitList = document.querySelector('.fruits');
      const li = document.createElement('li');
      li.classList.add('fruit');
      li.innerHTML = `<p>${fruitName}</p><p><em>${fruitDescription}</em></p><button class="delete-btn">x</button>`;
      fruitList.appendChild(li);
      
      // Clear input fields
      fruitInput.value = '';
      descriptionInput.value = '';
    }
  });

// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event) {
  const filterText = event.target.value.toLowerCase();
  const fruits = document.querySelectorAll('.fruit'); // Use querySelectorAll to get all matching elements
  
  fruits.forEach(fruit => {
    const name = fruit.querySelector('p').textContent.toLowerCase();
    const description = fruit.querySelector('em').textContent.toLowerCase();
    if (name.includes(filterText) || description.includes(filterText)) {
      fruit.style.display = 'flex';
    } else {
      fruit.style.display = 'none';
    }
  });
});
