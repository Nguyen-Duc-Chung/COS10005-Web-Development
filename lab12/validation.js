function validateForm() {
	// Get form values
	let message = document.getElementById("ms").value.trim();
	let studentID = document.getElementById("ID").value.trim();

	// Validation checks
	if (message === "") {
		alert("Message field cannot be empty.");
		return false;
	}
	if (studentID === "") {
		alert("Student ID field cannot be empty.");
		return false;
	}
	if (studentID.charAt(0).toLowerCase() !== 's') {
		alert("Student ID must start with the letter 's'.");
		return false;
	}

	// If all validations pass
	return true;
}

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
	var msgForm = 	document.getElementById("msgform");

	/* assigns functions to corresponding events */
	msgForm.onsubmit = validateForm;
}

/* execute the initialisation function once the window*/
window.onload = init;
