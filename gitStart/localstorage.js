function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve user details from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create an object to store user details
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };

    // Store the object directly in local storage with key User Details
    localStorage.setItem('User Details', JSON.stringify(userDetails));
}