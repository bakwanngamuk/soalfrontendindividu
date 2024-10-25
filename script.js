// Initialize particles
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.2, width: 1 },
        move: { enable: true, speed: 3 }
    }
});

// Subscribe Alert
function subscribeAlert(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
}

window.onscroll = function() {
    const navbar = document.querySelector('.sticky-navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

function sendMessage(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // You can add your form processing logic here
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Show a success alert (or any other handling logic)
    alert('Your message has been sent successfully!');

    // Clear the form
    document.getElementById('contactForm').reset();
    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    modal.hide();
}