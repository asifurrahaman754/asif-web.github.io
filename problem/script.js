//my json server url
const base_url = "  http://localhost:3000/contacts";

//get the data from the server when page is loaded
window.onload = () => {
    let tbody = document.querySelector("#tbody");
    axios.get(base_url)
        .then(res => {
            res.data.forEach(contact => {
                createTdElement(contact, tbody)
            });
            
        })
        .catch(error => console.log(error))
        
        let saveBtn = document.querySelector('#saveData');
        let nameField = document.querySelector('#namefield');
        let mailField = document.querySelector('#mailfield');

        //create new element 
        saveBtn.addEventListener("click",() => {
             //check if the field is empty 
            if(nameField.value !== "" && mailField.value !== ""){
                createNewElement();
            }else{
                alert('field should not be empty!')
            }
            
        });
        nameField.focus();
}

//call the function whenver user clicks on the button
function createNewElement(){
    let nameField = document.querySelector('#namefield');
    let phoneField = document.querySelector('#numfield');
    let mailField = document.querySelector('#mailfield');

    let contact = {
        name: nameField.value,
        phone: phoneField.value,
        email: mailField.value
    }
    axios.post(base_url,contact)
        .then(res => {
            let tbody = document.querySelector("#tbody");
            createTdElement(res.data,tbody);

            nameField.value = '';
            phoneField.value = '';
            mailField.value = '';
        })
        .catch(error => console.log(error))
}

//creating a tr element and pushing dynamic data
function createTdElement(contact, parenEl){
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = contact.name;
    tr.appendChild(tdName);

    const tdphone = document.createElement('td');
    tdphone.innerHTML = contact.phone? contact.phone: 'N/A';
    tr.appendChild(tdphone);

    const tdmail = document.createElement('td');
    tdmail.innerHTML = contact.email;
    tr.appendChild(tdmail);

    const tdAction = document.createElement('td');

    const tdEditBtn = document.createElement('button');
    tdEditBtn.className = 'btn btn-warning mx-1';
    tdEditBtn.innerHTML = 'Edit';
    tdEditBtn.addEventListener('click',() => {
        //show the modal
        let mainModal = $('#updateInfo');
        mainModal.modal('show');
        
        let editName = document.querySelector("#edit-name");
        let editPhone = document.querySelector("#edit-number");
        let editMail = document.querySelector("#edit-mail");
        let updateInfoBtn = document.querySelector("#updateInfo");

        editName.value = contact.name;
        editPhone.value = contact.phone? contact.phone: 'N/A';
        editMail.value = contact.email;

        updateInfoBtn.addEventListener('click',() => {
            axios.put(`${base_url}/${contact.id}`,{
                name : editName.value,
                phone : editPhone.value,
                email : editMail.value,
             })
             .then(res => {
                 tdName.innerHTML = res.data.name;
                 tdphone.innerHTML = res.data.phone;
                 tdmail.innerHTML = res.data.email;

                 mainModal.modal('hide');
             })
             .catch(error => console.log(error))
             
        }) 
    
    });
    tdAction.appendChild(tdEditBtn); 

    const tdDelBtn = document.createElement('button');
    tdDelBtn.className = 'btn btn-danger';
    tdDelBtn.innerHTML = 'Delete';
    tdDelBtn.addEventListener('click',() => {
        axios.delete(`${base_url}/${contact.id}`)
            .then(cur => {
                parenEl.removeChild(tr);
            })
            .catch(error => console.log(error))
    })
    tdAction.appendChild(tdDelBtn);

    tr.appendChild(tdAction);
    parenEl.appendChild(tr);
}