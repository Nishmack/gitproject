const appoinmentForm = document.getElementById('appointmentForm');
appoinmentForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let username = document.getElementById('username').value; 
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

// store val in local storage

    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);


    alert('Appointment details submitted successfully!');

    // clear form
    document.getElementById('appoinmentForm').requestFullscreen();
});
    