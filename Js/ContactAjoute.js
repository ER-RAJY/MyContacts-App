// Define the fetchData function
async function fetchData() {
    const response = await fetch("Js/API.json");
    const data = await response.json();
    console.log(data);
    displayContacts(data);
}

// Your existing code for handling form submission
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();

    // Validation flag to check if all fields are valid
    let isValid = true;

    inputs.forEach((input) => {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === "") {
            errorMessage.textContent = `${input.dataset.type} is required`;
            isValid = false;
        } else if (input.dataset.type === "Email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim())) {
            errorMessage.textContent = "Invalid email format";
            isValid = false;
        } else if (input.dataset.type === "phone" && !/^06\d{8}$/.test(input.value.trim())) {
            errorMessage.textContent = "Phone number must start with 06 and have 10 digits in total";
            isValid = false;
        } else {
            errorMessage.textContent = "";
        }
    });

    // If form is valid, proceed to add contact
    if (isValid) {
        const formData = new FormData(form);
        const contactData = {};

        // Constructing the contact data object
        formData.forEach((value, key) => {
            contactData[key] = value;
        });

        // Retrieve existing contacts from local storage
        let existingContacts = localStorage.getItem("contacts");
        existingContacts = existingContacts ? JSON.parse(existingContacts) : [];

        // Add the new contact to the existing contacts array
        existingContacts.push(contactData);

        // Save the updated contacts back to local storage
        localStorage.setItem("contacts", JSON.stringify(existingContacts));

        // Reload the contact list after adding a new contact
        fetchData();

        // Optionally, you can perform additional actions here, such as displaying a success message or refreshing the contact list
        console.log("Contact added successfully");

        // Clear the form after adding the contact
        form.reset();
    }
}
