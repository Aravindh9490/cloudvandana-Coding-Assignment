document.getElementById("submit-button").addEventListener("click", function () {
    if (validateForm()) {
        displayPopup();
    }
});

document.getElementById("reset-button").addEventListener("click", function () {
    resetForm();
});

document.getElementById("close-popup").addEventListener("click", function () {
    closePopup();
});

function validateForm() {
   
    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var dateOfBirthInput = document.getElementById("date-of-birth");
    var countryInput = document.getElementById("country");
    var genderInputs = document.querySelectorAll('input[name="gender"]');
    var professionInput = document.getElementById("profession");
    var emailInput = document.getElementById("email");
    var mobileNumberInput = document.getElementById("mobile-number");

    
    var isValid = true;

    if (firstNameInput.value === "") {
        firstNameInput.style.borderColor = "red";
        isValid = false;
    } else {
        firstNameInput.style.borderColor = "";
    }

    if (lastNameInput.value === "") {
        lastNameInput.style.borderColor = "red";
        isValid = false;
    } else {
        lastNameInput.style.borderColor = "";
    }

    if (dateOfBirthInput.value === "") {
        dateOfBirthInput.style.borderColor = "red";
        isValid = false;
    } else {
        dateOfBirthInput.style.borderColor = "";
    }

    if (countryInput.value === "") {
        countryInput.style.borderColor = "red";
        isValid = false;
    } else {
        countryInput.style.borderColor = "";
    }

    var genderSelected = false;
    genderInputs.forEach(function(input) {
        if (input.checked) {
            genderSelected = true;
        }
    });

    if (!genderSelected) {
        genderInputs.forEach(function(input) {
            input.style.borderColor = "red";
        });
        isValid = false;
    } else {
        genderInputs.forEach(function(input) {
            input.style.borderColor = "";
        });
    }

    if (professionInput.value === "") {
        professionInput.style.borderColor = "red";
        isValid = false;
    } else {
        professionInput.style.borderColor = "";
    }

    if (emailInput.value === "") {
        emailInput.style.borderColor = "red";
        isValid = false;
    } else {
        emailInput.style.borderColor = "";
    }

    if (mobileNumberInput.value === "") {
        mobileNumberInput.style.borderColor = "red";
        isValid = false;
    } else {
        mobileNumberInput.style.borderColor = "";
    }

    return isValid;
}

function displayPopup() {
    
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var country = document.getElementById("country").value;
    var gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(e => e.value).join(", ");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobile-number").value;

    
    var popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    
    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    
    document.getElementById("survey-form").reset();
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = "";
    }
    document.getElementById("country").style.borderColor = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}
