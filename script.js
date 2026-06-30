URL="https://dummyjson.com/products?limit=500"
fetch(URL)
.then((res)=>
    res.json()
)
.then((data)=>{
    console.log(data)
    let dataarray=[...data.products]
    let container = document.querySelector('main');

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gap = '20px';
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';


    dataarray.map((el)=>{
        // console.log(el)
        // console.log(el.title)

        let productCard = document.createElement('div');
        productCard.classList.add('product-card');



        productCard.addEventListener('click', () => {
                window.location.href = `product.html?id=${el.id}`;
            });



        productCard.style.border = '1px solid #e0e0e0';
        productCard.style.borderRadius = '8px';
        productCard.style.padding = '15px';
        productCard.style.display = 'flex';
        productCard.style.flexDirection = 'column';
        productCard.style.justifyContent = 'space-between';
        productCard.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';




        let headingTag = document.createElement('h2');
        headingTag.textContent = el.title;
        
        headingTag.style.fontSize = '18px';
        headingTag.style.margin = '0 0 10px 0';
        headingTag.style.color = '#333';

        let imgTag = document.createElement('img');
        imgTag.src = el.thumbnail;
        imgTag.alt = el.title;

        imgTag.style.width = '100%';
        imgTag.style.height = '180px';
        imgTag.style.objectFit = 'cover';
        imgTag.style.borderRadius = '4px';

        let descTag = document.createElement('p');
        descTag.textContent = el.description;
        descTag.classList.add('description');

        descTag.style.fontSize = '14px';
        descTag.style.color = '#666';
        descTag.style.margin = '10px 0';

        let priceTag = document.createElement('p');
        priceTag.textContent = `Price: ₹ ${Math.ceil(el.price*95)}/-`;
        priceTag.classList.add('price');

        priceTag.style.fontWeight = 'bold';
        priceTag.style.fontSize = '16px';
        priceTag.style.color = '#e44d26';
        priceTag.style.margin = '5px 0 15px 0';

        let cartBtn = document.createElement('button');
        cartBtn.textContent = "Add to Cart";
        cartBtn.classList.add('cart-btn');

        cartBtn.style.backgroundColor = '#007bff';
        cartBtn.style.color = 'white';
        cartBtn.style.border = 'none';
        cartBtn.style.padding = '10px';
        cartBtn.style.borderRadius = '4px';
        cartBtn.style.cursor = 'pointer';
        cartBtn.style.fontWeight = 'bold';
        cartBtn.addEventListener('mouseover', () => cartBtn.style.backgroundColor = '#0056b3');
        cartBtn.addEventListener('mouseout', () => cartBtn.style.backgroundColor = '#007bff');


        
cartBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 

      let cart = JSON.parse(localStorage.getItem('vrin_cart')) || [];
    
    
      let existingProduct = cart.find(item => item.id === el.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } 
    else {
        let priceInRupees = el.price * 95;
        let finalPrice = Math.round(priceInRupees - (priceInRupees * (el.discountPercentage / 100)));
        let originalPrice = Math.ceil(priceInRupees);

        cart.push({
            id: el.id,
            title: el.title,
            thumbnail: el.thumbnail,
            originalPrice: originalPrice, 
            price: finalPrice,            
            quantity: 1
        });
    }

    localStorage.setItem('vrin_cart', JSON.stringify(cart));
    alert(`${el.title} added to cart!`);
});


        productCard.appendChild(headingTag);    
        productCard.appendChild(imgTag);
        productCard.appendChild(descTag);
        productCard.appendChild(priceTag);
        productCard.appendChild(cartBtn);


        container.appendChild(productCard);
    })


})

.catch((err)=>{
    console.log("fail")
})