// SIGN UP FORM VALIDATION

// SELECTING ALL TEXT ELEMENTS
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');

// SELECTING ALL ERROR DISPLAY ELEMENTS
const firstNameError = document.getElementById('fname_error');
const lastNameError = document.getElementById('lname_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('pwd_error');
const passwordConfirmError = document.getElementById('pwd_confirm_error');

// SETTING ALL EVENT LISTENERS
firstName.addEventListener('blur',firstNameVerify, true);
lastName.addEventListener('blur',lastNameVerify, true);
email.addEventListener('blur',emailVerify, true);
password.addEventListener('blur',passwordVerify, true);

// Validation function 
const formValidation = () => {
  
  // validate first name
  if (firstName.value == "") {
    firstNameError.textContent = "Must be at least 3 characters";
    firstName.focus();
    return false;
  }
   
    // validate first name
  if (firstName.value.length < 3) {
    firstNameError.textContent = "Must be at least 3 characters";
    firstName.focus();
    return false;
  }

  // validate Lastname
  if (lastName.value == "") {
    lastNameError.textContent = "Must be at least 3 characters";
    lastName.focus();
    return false;
  }
   
    // validate Lastname
  if (lastName.value.length < 3) {
    lastNameError.textContent = "Must be at least 3 characters";
    lastName.focus();
    return false;
  }

    // validate email
    if (email.value == "") {
        emailError.textContent = "Must be at least 3 characters";
        email.focus();
        return false;
      }
    
}









// ADMIN ASIDE MENU 
const opensidemenu = () =>{
    document.getElementById('sidebarleftmenu').style.width ='267px';
    document.getElementById('mainpagecontent').style.marginLeft ='267px';
}
const closesidemenu = () =>{
    document.getElementById('sidebarleftmenu').style.width ='0';
    document.getElementById('mainpagecontent').style.marginLeft ='0px';
}

//----------------------
// MODAL POPUP

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })

})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

