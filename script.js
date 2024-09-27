let MenuBtn=document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("msg").value.trim();
    const successMessage = document.getElementById("successMessage");

    // Clear previous success message
    successMessage.style.display = "none";

    // Validation flags
    let valid = true;

    // Validate Name
    if (name === "") {
        alert("Please enter your name.");
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (email === "") {
        alert("Please enter your email.");
        valid = false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate Message
    if (message === "") {
        alert("Please enter your message.");
        valid = false;
    }

    // If all validations pass
    if (valid) {
        // Here you can add code to actually submit the form (e.g., using AJAX)
        // For now, we'll just display the success message
        successMessage.style.display = "block";
        document.getElementById("contactForm").reset(); // Reset form fields
    }
});
