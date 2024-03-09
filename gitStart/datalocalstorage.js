

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form elements
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    // Create user object
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
    
    // Convert object to JSON string
    const userDetailsJSON = JSON.stringify(userDetails);
    
    // Store user details in local storage
    localStorage.setItem("User Details", userDetailsJSON);
    
    // Optional: Provide feedback to the user
    alert("User details submitted successfully!");
    
    // Optional: Clear form fields after submission
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  