// JavaScript for form validation and event handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm'); // Replace with the ID of your form element
    
    // Event listener for form submit
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate email input
      const emailInput = document.getElementById('email');
      const emailValue = emailInput.value.trim();
      const emailValidation = document.getElementById('emailValidation');
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailValue.match(emailPattern)) {
        emailValidation.textContent = 'Invalid email address';
      } else {
        emailValidation.textContent = '';
      }
  
      // Validate phone number input
      const phoneInput = document.getElementById('phone');
      const phoneValue = phoneInput.value.trim();
      const phoneValidation = document.getElementById('phoneValidation');
      const phonePattern = /^\+?\d{1,3}-?\d{10}$/;
      if (!phoneValue.match(phonePattern)) {
        phoneValidation.textContent = 'Invalid phone number';
      } else {
        phoneValidation.textContent = '';
      }
  
      // Additional validation for other form inputs goes here
  
      // If all inputs are valid, display the booking details
      if (emailValidation.textContent === '' && phoneValidation.textContent === '') {
        displayBookingDetails(); // Replace with your function to display booking details
      }
    });
  });
  