let allContact;
if (localStorage.getItem("allContact")) {
    allContact = JSON.parse(localStorage.getItem("allContact"));
    console.log(allContact[0]);
}
function displayAllContact() {
    let contactPage = document.getElementById("contactPage");
    contactPage.innerHTML = `
                                <table border="1" id="contactPage">
                                    <tr>
                                        <th>S/N</th>
                                        <th>Full Name</th>
                                        <th>Phone No</th>
                                        <th>View</th>
                                        <th>Delete</th>
                                    </tr>
                                </table>
                                `;
    for (let i = 0; i < allContact.length; i++) {
        contactPage.innerHTML += `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${allContact[i].firstName} ${
            allContact[i].lastName
        }</td>
                                <td>${allContact[i].phone}</td>
                                <td><button onclick="showContact(${i})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View</button></td>
                                <td><button onclick="jjjjj(${i})" id="deleteButton" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button></td>
                            </tr>
                            `;
    }
}

function showContact(index) {
    console.log(index);
    let contactDiv = document.getElementById("contactDiv");
    let editButton = document.getElementById("editButton");
    contactDiv.innerHTML = `
        First Name <input type="text" value="${allContact[index].firstName}" id="contactFirstName">
                                <br>
                                Last Name <input type="text" value="${allContact[index].lastName}" id="contactLastName">
                                <br>
                                Company <input type="text" value="${allContact[index].company}" id="contactCompany">
                                <br>
                                Phone <input type="text" value="${allContact[index].phone}" id="contactPhone">
                                <br>
                                Email <input type="text" value="${allContact[index].email}" id="contactEmail">
                                `;
    editButton.innerHTML = `<button type="button" class="btn btn-primary" id="editButton" data-bs-dismiss="modal" onclick="shout(${index})">Edit Contact</button>`;
}

function shout(index) {
    contactFirstName = document.getElementById("contactFirstName");
    contactLastName = document.getElementById("contactLastName");
    contactCompany = document.getElementById("contactCompany");
    contactPhone = document.getElementById("contactPhone");
    contactEmail = document.getElementById("contactEmail");

    let contactDetails = {
        firstName: contactFirstName.value,
        lastName: contactLastName.value,
        company: contactCompany.value,
        phone: contactPhone.value,
        email: contactEmail.value,
    };
    console.log(contactDetails);
    allContact.splice(index, 1, contactDetails);
    localStorage.setItem("allContact", JSON.stringify(allContact));
    displayAllContact();
}

function jjjjj(index) {
    let confirmDelete = document.getElementById("confirmDelete");
    confirmDelete.innerHTML = `<button type="button" onclick="deleteContact(${index})" class="btn btn-danger" id="confirmDelete" data-bs-dismiss="modal">Delete</button>`;
}

function deleteContact(index) {
    allContact.splice(index, 1);
    localStorage.setItem("allContact", JSON.stringify(allContact));
    displayAllContact();
}
