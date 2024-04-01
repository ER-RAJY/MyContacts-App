document.addEventListener('DOMContentLoaded', function () {
    let profilePic = document.getElementById("profile-pic");
    let inputFile = document.getElementById("input-file");
    inputFile.onchange = function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", submitHandler);
});

function submitHandler(e) {
    e.preventDefault();

    // Validation flag to check if all fields are valid
    let isValid = true;

    // Get contacts array from ContactList.js
    const contacts = window.contacts;

    const inputs = this.querySelectorAll("input");
    inputs.forEach((input) => {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === "") {
            errorMessage.textContent = `${input.dataset.type} is required`;
            isValid = false;
        } else if (input.dataset.type === "Email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim())) {
            errorMessage.textContent = "Invalid email format (user@domaine.xxx)";
            isValid = false;
        } else if (input.dataset.type === "phone" && !/^06\d{8}$/.test(input.value.trim())) {
            errorMessage.textContent = "Phone number must start with 06 and have 10 digits in total";
            isValid = false;
        } else {
            errorMessage.textContent = "";
        }
    });

    // If all fields are valid, proceed to add the contact
    if (isValid) {
        addContact();
    }
}

function addContact() {
    // Get contacts array from ContactList.js
    const contacts = window.contacts;

    // Rest of the function...
}

// Function to add a new contact
function addContact() {
    const firstName = document.querySelector('input[name="F-name"]').value.trim();
    const lastName = document.querySelector('input[name="L-name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phoneNumber = document.querySelector('input[name="phone"]').value.trim();
    const job = document.querySelector('input[name="Job"]').value.trim();
    const company = document.querySelector('input[name="Company"]').value.trim();

    // Create a new contact object
    const newContact = {
        full_name: `${firstName} ${lastName}`,
        email: email,
        phone_number: phoneNumber,
        work: job,
        company: company,
        image_url: 'Img/placeholder.png' // You can update this with the actual image URL if needed
    };

    // Add the new contact to the contacts array
    contacts.push(newContact);

    // Display the updated contacts
    displayContacts(contacts);

    // Reset the form
    document.getElementById("form").reset();
}
