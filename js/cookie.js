document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("disclaimer-modal");

    // Get the button that accepts the disclaimer
    var acceptBtn = document.getElementById("accept-btn");


    // Function to show the modal after a delay
    function showModal() {
        if (localStorage.getItem('disclaimerAccepted') !== 'true') {
            modal.style.display = "block";
        }
    }

    // Set a timeout to show the modal after 2 seconds
    setTimeout(showModal, 2000);

    // When the user clicks on the accept button, set a cookie and close the modal
    acceptBtn.onclick = function() {
        localStorage.setItem('disclaimerAccepted', 'true');
        setCookie('disclaimerAccepted', 'true', 30);
        modal.style.display = "none";
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
});
