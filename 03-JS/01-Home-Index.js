let heroSection = document.querySelector('.hero-section');
let cardsSection = document.querySelector('.cards-section');
let getInspired = document.querySelector('.get-inspired');



// Home Function
function home() {
    heroSection.style.display = "block";
    cardsSection.style.display = "block";
    getInspired.style.display = "block";

    document.getElementById('home').style.color='#268184';
    document.getElementById('home').style.borderBottom='2px solid #268184';

    document.getElementById('about').style.color='white';
    document.getElementById('shop').style.color='white';
    document.getElementById('newArrival').style.color='white';
    document.getElementById('newArrival').style.borderBottom='none';

    document.getElementById('contact').style.color='white';

}

// New Arrivals Function
function newArrivals() {
    heroSection.style.display = "none";
    cardsSection.style.display = "none";
    getInspired.style.display = "none";

    document.getElementById('home').style.color='white';
    document.getElementById('home').style.borderBottom='none';

    document.getElementById('about').style.color='white';
    document.getElementById('about').style.borderBottom='none';

    document.getElementById('shop').style.color='white';
    document.getElementById('shop').style.borderBottom='none';

    document.getElementById('newArrival').style.color='#268184';
    document.getElementById('newArrival').style.borderBottom='2px solid #268184';

    document.getElementById('contact').style.color='white';
    document.getElementById('contact').style.borderBottom='none';
}


// Open New Page About Us in New Window
function aboutUs(){
    window.open('file:///E:/Kids%20Swag.com/01-HTML/02-AboutUs.html', '_self');

}

// Clickable Logo

let logo = document.querySelector('.logo');

logo.addEventListener('click', ()=>{
    window.open('file:///E:/Kids%20Swag.com/01-HTML/01-Home-Index.html#', '_self');
});



// ~~~~~~~~~~~~~~~~~~ Extra Modal Section ~~~~~~~~~~~~~~~~~~~
