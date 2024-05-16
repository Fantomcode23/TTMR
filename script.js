const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3 = document.getElementById('dropdown3');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission (not applicable here, but good practice)

  const feverSeverity = dropdown1.value;
  const coughSeverity = dropdown2.value;
  const breathingSeverity = dropdown3.value;

  let moderateCount = 0;
  let severeCount = 0;

  if (feverSeverity === 'moderate') {
    moderateCount++;
  } else if (feverSeverity === 'severe') {
    severeCount++;
  }

  if (coughSeverity === 'moderate') {
    moderateCount++;
  } else if (coughSeverity === 'severe') {
    severeCount++;
  }

  if (breathingSeverity === 'moderate') {
    moderateCount++;
  } else if (breathingSeverity === 'severe') {
    severeCount++;
  }

  // Determine redirection based on symptom severity
  if (moderateCount >= 2 && severeCount === 0) {
    window.location.href = "fc1.html"; // Redirect to prescription page
  } else if (severeCount >= 2) {
    window.location.href = "fc2.html"; // Redirect to doctor connect page
  } else {
    alert("Thank you for using Nan Vaithiyan. Based on your symptoms, it appears you may not require immediate medical attention. Please continue monitoring your condition and consult a doctor if necessary.");
  }
});
