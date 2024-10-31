let heroSection = document.querySelector('.hero-section');
let cardsSection = document.querySelector('.cards-section');
let getInspired = document.querySelector('.get-inspired');



// Home Function
// function home() {
//     heroSection.style.display = "block";
//     cardsSection.style.display = "block";
//     getInspired.style.display = "block";

//     document.getElementById('home').style.color='#268184';
//     document.getElementById('home').style.borderBottom='2px solid #268184';

//     document.getElementById('about').style.color='white';
//     document.getElementById('shop').style.color='white';
//     document.getElementById('newArrival').style.color='white';
//     document.getElementById('newArrival').style.borderBottom='none';

//     document.getElementById('contact').style.color='white';

// }

// New Arrivals Function
// function newArrivals() {
//     heroSection.style.display = "none";
//     cardsSection.style.display = "none";
//     getInspired.style.display = "none";

//     document.getElementById('home').style.color='white';
//     document.getElementById('home').style.borderBottom='none';

//     document.getElementById('about').style.color='white';
//     document.getElementById('about').style.borderBottom='none';

//     document.getElementById('shop').style.color='white';
//     document.getElementById('shop').style.borderBottom='none';

//     document.getElementById('newArrival').style.color='#268184';
//     document.getElementById('newArrival').style.borderBottom='2px solid #268184';

//     document.getElementById('contact').style.color='white';
//     document.getElementById('contact').style.borderBottom='none';
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ NEW TERM ABOUT WINDOW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Open New Page About Us in New Window
function aboutUs(){
    window.open('file:///E:/Kids%20Swag.com/01-HTML/02-AboutUs.html', '_self');
}

// Clickable Logo
// let logo = document.querySelector('.logo');

// logo.addEventListener('click', ()=>{
//     window.open('file:///E:/Kids%20Swag.com/01-HTML/01-Home-Index.html#', '_self');
// });



// ~~~~~~~~~~~~~~~~~~ Extra Modal Section ~~~~~~~~~~~~~~~~~~~
// Show Modal
let navbarUser = document.querySelector('#navbar-user');
let modalCont = document.querySelector('.modal-cont');

navbarUser.addEventListener('click', ()=>{
    modalCont.style.display = 'flex';
    navbarUser.style.color = 'var(--text-green-color)';
    // modalCont.style.transiton = '.5s';
});


// Hide Modal
let mdlXBtn = document.querySelector('#mdl-x-btn');

mdlXBtn.addEventListener('click', ()=>{
    modalCont.style.display = 'none';
    navbarUser.style.color = 'white';
});

//Hide Modal if click anywhere outside the modal
// It works but little bit confused on this point 
window.onclick = (event)=>{
    if (event.target === modalCont) {
        modalCont.style.display = 'none';
    }
};

// Modal Social Icons
let fbIcon = document.querySelector('#fb-icon');
let gmailIcon = document.querySelector('#gmail-icon');
let linkedInIcon = document.querySelector('#linkedIn-icon');

fbIcon.addEventListener('click', ()=>{
    window.open('https://www.facebook.com/login.php?skip_api_login=1&api_key=1896981220538415&kid_directed_site=0&app_id=1896981220538415&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.2%2Fdialog%2Foauth%3Fclient_id%3D1896981220538415%26state%3Df8806bbdb93baaf93dfe8df93be41c12%26response_type%3Dcode%26sdk%3Dphp-sdk-5.7.0%26redirect_uri%3Dhttps%253A%252F%252Fsocial-login.oxiapps.com%252Fauth%252Ffacebook%26scope%3Demail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddb8b1a75-2863-4444-a79e-cf8d3b467377%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Df8806bbdb93baaf93dfe8df93be41c12%23_%3D_&display=popup&locale=en_GB&pl_dbl=0', '', 'width=500,height=500');
});

gmailIcon.addEventListener('click', ()=>{
    window.open('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Fgoogle&client_id=898543883992-ut65aoh5alu6s7jlcs5hk05htbagjs9n.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=auto&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow', '', 'width=500,height=500');
});

linkedInIcon.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D4938111%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522671a3c92a91221.80965280%2522%252C%2522appId%2522%253A4938111%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fsocial-login.oxiapps.com%252Fauth%252Flinkedin%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1729772691346%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D4938111%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522671a3c92a91221.80965280%2522%252C%2522appId%2522%253A4938111%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fsocial-login.oxiapps.com%252Fauth%252Flinkedin%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1729772691346%257D', '', 'width=500,height=500');
});


// ~~~~~~~~~~~~~~~~ Modal Forgot and Reset Password ~~~~~~~~~~~~~~~~
let forgotPwd = document.querySelector('#forgot-pwd');
let resetPwdCont = document.querySelector('.reset-pwd-cont');
let pwdCancel = document.querySelector('#pwd-cancel');
let pwdXBtn = document.querySelector('#pwd-x-btn');

forgotPwd.addEventListener('click', ()=>{
    resetPwdCont.style.display = 'flex';
});

pwdCancel.addEventListener('click', ()=>{
    modalCont.style.display = 'flex';
    resetPwdCont.style.display = 'none';
});

pwdXBtn.addEventListener('click', ()=>{
    modalCont.style.display = 'none';
    resetPwdCont.style.display = 'none';
    navbarUser.style.color = 'white';
});


// ~~~~~~~~~~~~~~~~ New Customer Registration ~~~~~~~~~~~~~~~~
let newCustomerReg = document.querySelector('#new-customer-Reg');
let newCustomerCont = document.querySelector('.new-customer-cont');
let alreadyHaveAccount = document.querySelector('#already-have-account');
let regXBtn = document.querySelector('#reg-x-btn');

newCustomerReg.addEventListener('click', ()=>{
    newCustomerCont.style.display = 'flex';
});

alreadyHaveAccount.addEventListener('click', ()=>{
    modalCont.style.display = 'flex';
    newCustomerCont.style.display = 'none';
});

regXBtn.addEventListener('click', ()=>{
    newCustomerCont.style.display = 'none';
    modalCont.style.display = 'none';
    navbarUser.style.color = 'white';
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~ Home page New Arrival Show More Button ~~~~~~~~~~~~~~~~~~~~~~~~~
// let NAmoreBtn = document.querySelector('#NA-more-btn');

// NAmoreBtn.addEventListener('click', ()=>{
//     window.open('file:///E:/Kids%20Swag.com/01-HTML/04-NewArrivals.html');

// });













// ~~~~~~~~~~~~~~~~~~~~~~~~~~ Login User Email & Password Setting (Modal 01) ~~~~~~~~~~~~~~~~~~~~~~~~~~
let loginEmailInput = document.querySelector('#login-email-input');
let loginPwdInput = document.querySelector('#login-pwd-input');
let loginBtn = document.querySelector('#login-btn');

let loginSpan = document.querySelector('#login-span');


loginBtn.addEventListener('click', ()=>{
   loginSpan.style.display = 'block'; 
   loginEmailInput.style.border = '1px solid red';
   loginPwdInput.style.border = '1px solid red';
});