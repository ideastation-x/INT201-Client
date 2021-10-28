const divProductsEle = document.querySelector('#products');
console.log(divProductsEle);

{
    /* <div id="P001">
    <p>product id: P001</p>
    <p>product name: iphone</p>
    <p>product id: 10000 Baht</p>
    <p>stock: 1</p>
</div>; */
}

let product = {
    productId: 'P001',
    productName: 'IPhone',
    price: 10000,
    stock: 10,
};

//1. create div element -> <div></div>
const divProductEle = document.createElement('div');

//2. create id attricute on div element -> <div id='P001'> </div>
divProductEle.setAttribute('id', product.productId);

//3. create <p> for productId -> <p>P001</p>
const pProductIdEle = document.createElement('p');
pProductIdEle.textContent = product.productId;

// <div id='P001> <p>P001</p> </div>
divProductEle.appendChild(pProductIdEle);

//4. create <p> for productId -> <p>Iphone</p>
const pProductNameEle = document.createElement('p');
pProductNameEle.textContent = product.productName;
divProductEle.appendChild(pProductNameEle);

//5. create <p> for productId -> <p>10000</p>
const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = product.price + ' Baht';
divProductEle.appendChild(pProductPriceEle);

//6. add product element to products element
divProductsEle.appendChild(divProductEle);
