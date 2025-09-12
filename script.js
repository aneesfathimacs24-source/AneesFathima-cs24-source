// Dark/Light Mode Toggle

function toggleTheme() {

  document.body.classList.toggle('dark-mode');

}

// Display current year in footer

document.addEventListener('DOMContentLoaded', () => {

  const yearSpan = document.getElementById('year');

  if (yearSpan) {

    yearSpan.textContent = new Date().getFullYear();

  }

});

// Simple form validation (example for contact form)

function validateForm(event) {

  const email = document.getElementById('email').value;

  const message = document.getElementById('message').value;

  

  if (email.trim() === '' || message.trim() === '') {

    alert('Please fill out all fields.');

    event.preventDefault(); // prevent form submission

  }

}