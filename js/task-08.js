// Select the login form
const loginForm = document.querySelector('.login-form');

// Add a submit event listener to the form
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission action
  event.preventDefault();

  // Get form fields
  const email = this.elements.email.value;
  const password = this.elements.password.value;

  // Check if any of the fields are empty
  if (!email || !password) {
    // Display an alert if any field is empty
    alert('All fields must be filled in!');
    return; // Stop the function execution here
  }

  // If all fields are filled, collect the data into an object
  const formData = {
    email: email,
    password: password,
  };

  // Log the object with form data to the console
  console.log(formData);

  // Clear the form fields
  this.reset();
});

