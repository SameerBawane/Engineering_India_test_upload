document.getElementById('registerBtn').addEventListener('click', function() {
    var form = document.getElementById('registrationForm');
    var successMessage = document.getElementById('successMessage');

    // Hide the form
    form.classList.add('hide');

    // Show the success message
    successMessage.style.display = 'block';

    // After 5 seconds, redirect to the main index.html page
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 5000); // 5000 milliseconds = 5 seconds
});
