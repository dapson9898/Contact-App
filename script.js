let allContact;

if (localStorage.getItem("allContact")) {
    allContact = JSON.parse(localStorage.getItem("allContact"));
} else {
    allContact = [];
}

function addContact() {
    contactFirstName = document.getElementById("contactFirstName");
    contactLastName = document.getElementById("contactLastName");
    contactCompany = document.getElementById("contactCompany");
    contactPhone = document.getElementById("contactPhone");
    contactEmail = document.getElementById("contactEmail");

    if (
        (contactFirstName.value == "" && contactLastName.value == "") ||
        contactPhone.value == ""
    ) {
        alert("Enter contact name and phone no.");
    } else {
        let contactDetails = {
            firstName: contactFirstName.value,
            lastName: contactLastName.value,
            company: contactCompany.value,
            phone: contactPhone.value,
            email: contactEmail.value,
        };
        console.log(contactDetails);
        allContact.push(contactDetails);
        localStorage.setItem("allContact", JSON.stringify(allContact));
        alert("Contact Saved Successfully.");

        contactFirstName.value = "";
        contactLastName.value = "";
        contactCompany.value = "";
        contactPhone.value = "";
        contactEmail.value = "";
    }
}
