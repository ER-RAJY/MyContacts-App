async function fetchData() {
    const response = await fetch("Js/API.json");
    const data = await response.json();
    console.log(data);
    displayContacts(data);
}

function displayContacts(contacts) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const cardHtml = `
            <div class="col-md-4" style="box-shadow: 2px solid black;">
                <div class="card">
                    <div class="card-body">
                        <div class="">
                            <img style="margin-top: 10px; margin-bottom: 43px; margin-left: 26%; width: 40%; height: 40%;  border-radius: 50%; border: 6px solid #eaeaea;" src="${contact.image_url}" alt="">
                        </div>
                        <h5 class="card-title">${contact.full_name}</h5>
                        <p class="card-text"> <span>${contact.work}</span> at </br> ${contact.company}</p>
                        <h5 class="card-title">Phone</h5>
                        <p class="card-text"><i class="fa-solid fa-phone"></i>${contact.phone_number}</p>
                        <h5 class="card-title">Email</h5>
                        <p class="card-text"><i class="fa-solid fa-envelope"></i>${contact.email}</p>
                    </div>
                </div>
            </div>
        `;
        contactList.innerHTML += cardHtml;
    });
}

// Fetch data when the page loads
fetchData();