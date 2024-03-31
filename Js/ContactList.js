async function fetchData() {
    try {
        const response = await fetch("Js/API.json");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayContacts(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayContacts(contacts) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const cardHtml = `
            <div class="contact-card">
                <img src="${contact.image_url}" alt="${contact.full_name}">
                <h2>${contact.full_name}</h2>
                <p><strong>Work:</strong> ${contact.work}</p>
                <p><strong>Company:</strong> ${contact.company}</p>
                <p><strong>Phone:</strong> ${contact.phone_number}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
            </div>
        `;
        contactList.innerHTML += cardHtml;
    });
}

// Fetch data when the page loads
window.onload = fetchData;