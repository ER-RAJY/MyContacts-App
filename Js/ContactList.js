
let contacts = [];

async function fetchData() {
    const response = await fetch("Js/API.json");
    const data = await response.json();
    console.log(data);
    contacts = data;
    displayContacts(data);
}



function displayContacts(contacts) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const cardHtml = `
            <div id="contenu" class="col-md-4" style="box-shadow: 2px solid black;">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <img style="margin-top: 10px; margin-bottom: 43px; margin-left: 26%; width: 40%; height: 40%;  border-radius: 74px 22px 80px 22px;border: 1px solid #eaeaea;" src="${contact.image_url}" alt="">
                        </div>
                        <h4 style="font-weight: bolder; margin-left: 25%;" class="card-title">${contact.full_name}</h4>
                        <p style="text-align:center;" class="card-text"> <span style="color:#A5A5A5;">${contact.work} at</span>  </br> <span style="font-weight: 650; color:#8358BA; ">${contact.company}</span></p>
                        <p class="card-text"><i style="margin-left: 88px;" class="fa-solid fa-phone"></i><span style="font-weight: bolder; margin-left: 10px;"> ${contact.phone_number}</span> </p>
                        <p class="card-text"><i style="margin-left: 50px;" class="fa-solid fa-envelope"></i><span style="font-weight: bolder; margin-left: 10px;"> ${contact.email}</span></p>
                        <button onclick="deleteCard(this)" class="btn delete-btn" style="position: absolute; top: 10px; right: 10px; border:none ; width:40px;"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
        contactList.innerHTML += cardHtml;
    });
}
fetchData();

function deleteCard(btn) {
    btn.closest('.col-md-4').remove();
}

function searchContacts() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    console.log("Search term:", searchTerm); 

    const filteredContacts = [];
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const fullName = contact.full_name.toLowerCase();
        const phoneNumber = contact.phone_number.toLowerCase();
        if (fullName.includes(searchTerm) || phoneNumber.includes(searchTerm)) {
            filteredContacts.push(contact);
        }
    }

    console.log("Filtered contacts:", filteredContacts); 
    displayContacts(filteredContacts);
}
