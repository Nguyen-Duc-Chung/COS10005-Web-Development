
// *********************** CHECKING REGISTER FORM *********************** //
document.addEventListener('DOMContentLoaded', function () {
    // Get the form and input fields
    var form = document.querySelector('form');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var email = document.getElementById('email');
    var icecream = document.getElementById('icecream');
    var hobbies = document.getElementsByName('hobbies');
    var gender = document.getElementsByName('gender');

    // Add event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Clear any previous error messages
        var errorMessage = '';

        // Check if username is blank
        if (username.value.trim() === '') {
            errorMessage = "Username is required.";
            alert(errorMessage);
            event.preventDefault(); // Prevent form submission
            return; // Exit the function after showing the first error
        }

        // Check if password is blank first, then check its length
        if (password.value.trim() === '') {
            errorMessage = "Password is required.";
            alert(errorMessage);
            event.preventDefault();
            return;
        } else if (password.value.trim().length < 9) {
            errorMessage = "Password must be at least 9 characters long.";
            alert(errorMessage);
            event.preventDefault();
            return;
        }

         // Check if gender is selected
         var genderChecked = false;
         for (var j = 0; j < gender.length; j++) {
             if (gender[j].checked) {
                 genderChecked = true;
                 break;
             }
         }
         if (!genderChecked) {
             errorMessage = "Please select a gender.";
             alert(errorMessage);
             event.preventDefault();
             return;
         }

        // Check if email is blank
        if (email.value.trim() === '') {
            errorMessage = "Email is required.";
            alert(errorMessage);
            event.preventDefault();
            return;
        }

        // Check if ice-cream flavor is selected
        if (icecream.value.trim() === '') {
            errorMessage = "Please select your favorite ice-cream flavor.";
            alert(errorMessage);
            event.preventDefault();
            return;
        }

        // Check if at least one hobby is checked
        var hobbyChecked = false;
        for (var i = 0; i < hobbies.length; i++) {
            if (hobbies[i].checked) {
                hobbyChecked = true;
                break;
            }
        }
        if (!hobbyChecked) {
            errorMessage = "Please select at least one hobby.";
            alert(errorMessage);
            event.preventDefault();
            return;
        }
    });
});
