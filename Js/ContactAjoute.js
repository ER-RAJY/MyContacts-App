
    
    let profilePic = document.getElementById("profile-pic");
    let inputFile = document.getElementById("input-file");
    inputFile.onchange = function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }

// const formInputs = document.querySelectorAll('#form input');
// formInputs.forEach(input => {
//     input.addEventListener('focusout', validateInput);
// function validateInput() {
//     const input = this;
//     const errorMessage = input.nextElementSibling;
    
//     if (input.value.trim() === "") {
//         errorMessage.textContent = `${input.dataset.type} is required`;
//         isValid = false;
//     } else if (input.dataset.type === "Email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim())) {
//         errorMessage.textContent = "Invalid email format (user@domaine.xxx)";
//         isValid = false;
//     } else if (input.dataset.type === "phone" && !/^06\d{8}$/.test(input.value.trim())) {
//         errorMessage.textContent = "Phone number must start with 06 and have 10 digits in total";
//         isValid = false;
//     } else {
//         errorMessage.textContent = "";
//     }
// }
// });

const form = document.getElementById("form");
form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();

    let isValid = true;

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

 
    if (isValid) {
        addContact();
    }
}


var list_contactes;
var contacts_local=localStorage.getItem("les_contctes_local");
if(contacts_local==null){
    list_contactes=[];
}else{

    list_contactes=contacts_local;
}


function addContact() {

    const contacts = window.contacts;
    const firstName = document.querySelector('input[name="F-name"]').value.trim();
    const lastName = document.querySelector('input[name="L-name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phoneNumber = document.querySelector('input[name="phone"]').value.trim();
    const job = document.querySelector('input[name="Job"]').value.trim();
    const company = document.querySelector('input[name="Company"]').value.trim();


    const newContact = {
        "Fname": firstName,
        "Lname": lastName,
        "phone": phoneNumber,
        "email": email,
        "Job": job,
        "Company": company
    };


      list_contactes.push(newContact);

    localStorage.setItem("les_contctes_local",JSON.stringify(list_contactes));


    document.getElementById("form").reset();
}