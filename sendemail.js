// sendEmail.js

// Initialize EmailJS with your service ID
emailjs.init("service_61d7rl9");

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Use EmailJS to send email
    emailjs.send("service_61d7rl9", "template_hx3vxje", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        alert("Email sent successfully!");
        // Clear the form after successful submission
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert("Error: Failed to send email.");
        console.error('Email sending failed:', error);
    });
}
