 // Function to set a cookie
 function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to clear all form fields
function clearForm() {
    document.querySelector('.pq-contact-form').reset();
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Set a cookie
    setCookie("formSubmitted", "true", 1);

    // Show alert
    Swal.fire({        
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 1500
      });

    // Clear all fields
    clearForm();
}

// Add event listener to the send button
//document.addEventListener('DOMContentLoaded', function() {
//    document.querySelector('.pq-button').addEventListener('click', handleSubmit);
//});