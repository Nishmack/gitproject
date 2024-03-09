function handleFormSubmit(event) {
    event.preventDefault();
    const userId = document.getElementById("userId").value; // Assuming you have a hidden input field for userId
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };



    // save data on server
    axios
      .post(
        "https://crudcrud.com/api/56990b05d99f4b3ba74c045910342d1d/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));


    // Update user details on server
    axios.put(`https://crudcrud.com/api/56990b05d99f4b3ba74c045910342d1d/appointmentData/${userId}`,userDetails)
        .then(response => {
            // If update is successful, display the updated user details on the screen
            displayUserOnScreen(response.data);
           
        })
        .catch(error => {
            console.error(error);
        });
  

  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);







  //delete data from server and screen instead of local storage
    deleteBtn.addEventListener("click", function (event) {
        const userId = userDetails._id;          //assume id is present in user details
        axios.delete("https://crudcrud.com/api/56990b05d99f4b3ba74c045910342d1d/appointmentData/${userId}")
          .then((resolve)=>{
            userList.removeChild(event.target.parentElement);
          })
          .catch((error)=>{
            console.log(error)
          });
     
      
    });
  





    editBtn.addEventListener("click", function (event) {
     // Remove the user item from the screen temporarily for editing
      userList.removeChild(event.target.parentElement);
      // Populate the form fields with user details for editing
      document.getElementById("userId").value = userDetails._id;
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }

  


  
  window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/56990b05d99f4b3ba74c045910342d1d/appointmentData")
        .then(response => {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                displayUserOnScreen(response.data[i]);
            }
        })
        .catch(error => {
            console.log(error);
        });
});
  