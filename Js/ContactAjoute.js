// let FirstName= document.querySelector("[name='F-name']");
// let LastName= document.querySelector("[name='L-name']");
// let phone= document.querySelector("[name='phone']");
// let email= document.querySelector("[name='email']");
// let Job= document.querySelector("[name='Job']");
// let Company= document.querySelector("[name='Company']");


// document.onsubmit[0] = function(e){
//     let FnameValid = false; 
//     let LnameValid = false;
//     let emailValid = false;
//     let phoneValid = false;
//     let JobValid = false;
//     let CompanyValid = false;
    

//     if (FirstName !== "" && phone.ariaValueMax.length <= 10 ) {
//         phoneValid = true ;
//     }

//     if (LastName !== "") {
//         emailValid = true;
//     }
    
//     if (phone !== "" && phone.ariaValueMax.length <= 10) {
//         emailValid = true;
//     }
    
//     if (email !== "") {
//         emailValid = true;
//     }
    
//     if (Job !== "") {
//         emailValid = true;
//     }
    
//     if (Company !== "") {
//         emailValid = true;
//     }

//     if (phoneValid === false || emailValid === false) {
//         e.preventDefault();
//     }
// }
// document.links[0].onclick = function(event){
//     console.log(event);
//     event.preventDefault();
// }


const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    inputs.forEach((input) => {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === "") {
            errorMessage.textContent = `${input.dataset.type} is required`;
        } else if (input.dataset.type === "Email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim())) {
            errorMessage.textContent = "Invalid email format";
        } else if (input.dataset.type === "phone" && !/^06\d{8}$/.test(input.value.trim())) {
            errorMessage.textContent = "Phone number must start with 06 and have 10 digits in total";
        } else {
            errorMessage.textContent = "";
        }
    });
}


    let profilePic = document.getElementById("profile-pic");
    let inputFile = document.getElementById("input-file");
    inputFile.onchange = function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }

    const formEL = document.querySelector('.form');
    formEL.addEventListener('submit', event => {
        event.preventDefault();
        const formDta = new FormData(formEL);
        const data = Object.fromEntries(formDta);

        fetch("Js/API.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData); // Log the response from the server
            // Optionally, you can handle the response data here (e.g., display a success message)
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors that occur during the request
            // Optionally, you can display an error message to the user
        });
    });