

let btn = document.querySelector('#btn');


btn.addEventListener('click', ()=>{

    let productTitle = document.querySelector('#p-title').value;
    let productImage = document.getElementById("p-img").files[0];
    let productPrice = document.querySelector('#p-price').value;

    console.log(productImage);
});

