// Coding Freaks Lec# 04 Access childern using JavaScript.
let contactFormBtn = document.querySelector('#contact-form-btn');

contactFormBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    let formContact = document.querySelector('#form-contact');
    console.log(formContact.children[2].value);
});