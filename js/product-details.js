let user = JSON.parse(sessionStorage.user || null)

if(user == null){
    location.replace('/login');
}


// loader
let loader = document.querySelector('.loader');
let noProductImg = document.querySelector('.no-product');

loader.style.display = 'block';

 const setupProducts = () => {
     fetch('/get-products', {
         method: 'post',
         headers: new Headers({'Content-Type': 'application/json'}),
         body: JSON.stringify({email : 'asmitapandey202@gmail.com'})
     })
     .then(res => res.json())
     .then(data => {
         loader.style.display = 'none';
         if(data == 'no products'){
             noProductImg.style.display = 'block';
         } else{
             data.forEach(product => createProduct(product));
         }
     })
 }
setupProducts();
const createProduct = (data) => {
    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += `
    <div class="product-card">
        <a href="/products/${data.id}"><img src="${data.image}" class="product-img" alt=""></a>
        <p class="product-name">${data.tags[0]} →</p>
    </div>
    `;
}