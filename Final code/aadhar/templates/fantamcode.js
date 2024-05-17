const aadharNumberInput = document.getElementById('aadhar-number');
const errorMessage = document.getElementById('error-message');
const loginForm = document.getElementById('login-form');

// Placeholder for a more robust verification process (replace with your actual implementation)
function verifyAadhar(aadharNumber) {
  // Simulate a delay to represent actual verification (remove for direct verification)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isVerified = aadharNumber === '123456789012'; // Replace with actual verification logic
      resolve(isVerified);
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  });
}

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const aadharNumber = aadharNumberInput.value;

  // Input validation (optional, but recommended for better user experience)
  if (!aadharNumber || aadharNumber.length !== 12) {
    errorMessage.textContent = 'Invalid Aadhar number. Please enter a valid 12-digit number.';
    return;
  }

  // Display a loading indicator while verification is in progress
  errorMessage.textContent = 'Verifying Aadhar number...';

  verifyAadhar(aadharNumber)
    .then(isVerified => {
      if (isVerified) {
        // Aadhar verified successfully, redirect to next page
        window.location.href = "fc.html";
      } else {
        errorMessage.textContent = 'Aadhar verification failed. Please try again.';
      }
    })
    .catch(error => {
      console.error('Error during Aadhar verification:', error);
      errorMessage.textContent = 'An error occurred. Please try again later.';
    })
    .finally(() => {
      // Remove the loading indicator after verification is complete
      errorMessage.textContent = '';
    });
});
