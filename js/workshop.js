let btnPlus = document.querySelector('.qty-plus');

let btnAdd = document.querySelector('#add_button');


btnPlus.addEventListener('click', increaseQuantity);

btnAdd.addEventListener('click', addArticle);


function increaseQuantity() {
   
   this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1



    

    let subTotal = document.querySelector('.subtotal');
    let price = document.querySelector('.price');
    let quantity = document.querySelector('.qty');

    
    subTotal.innerText = parseInt(quantity.value) * parseInt(price.innerText) + '$';


}


function addArticle(){
    let name = document.querySelector('#name_product');
    let price =  document.querySelector('#price_product');

    let allProducts = document.querySelector('#all_products');

    allProducts.innerHTML = allProducts.innerHTML + '<tr><td class="article--name"><div style="margin-right:1rem"><img src="images/Livre1.jfif"></div> <div><h3>' + name.value + '<h3/> <a class="remove" id="1">Supprimer</a></div></td><td class="quantity"> <button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="1" ><button class="qty-plus" id="1">+</button></td><td class="price">' + price.value + '$</td> <td class="subtotal">' + price.value + ' $</td></tr>';


    let btnPlusAll = document.querySelectorAll('.qty-plus');

    btnPlusAll.forEach(btn => btn.addEventListener('click', increaseQuantity));

    


}