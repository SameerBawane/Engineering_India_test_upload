document.getElementById('registerBtn').addEventListener('click', function() {
    var form = document.getElementById('registrationForm');
    var successMessage = document.getElementById('successMessage');
    var errorMessage = document.getElementById('errorMessage');
    
    // Clear previous error message
    errorMessage.style.display = 'none';

    // Check if all required fields are filled
    var allFieldsFilled = true;
    document.querySelectorAll('#registrationForm input, #registrationForm textarea').forEach(function(input) {
        if (!input.value.trim()) {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        // Hide the form
        form.classList.add('hide');

        // Show the success message
        successMessage.style.display = 'block';

        // After 5 seconds, redirect to the main index.html page
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 5000); // 5000 milliseconds = 5 seconds

    } else {
        // Show error message
        errorMessage.textContent = 'Please fill out all fields before submitting the form.';
        errorMessage.style.display = 'block';
    }
});
