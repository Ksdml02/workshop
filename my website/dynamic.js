document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('responseMessage').innerText = 'Thank you for your message!';
    this.reset();
});
