// ini Javascript

replaceName();

function replaceName() {
    let name = prompt('Enter Your Name');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

// Get current time
const currentTime = document.getElementById('currentTime');
const now = new Date();
const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
currentTime.textContent = now.toLocaleDateString('en-US', dateOptions);

// Form submission handling
const contactForm = document.getElementById('contactForm');
const messageName = document.getElementById('messageName');
const messageBirthdate = document.getElementById('messageBirthdate');
const messageGender = document.getElementById('messageGender');
const messageMessage = document.getElementById('messageMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  // Display message content
  messageName.textContent = name;
  messageBirthdate.textContent = birthdate;
  messageGender.textContent = gender;
  messageMessage.textContent = message;
});

