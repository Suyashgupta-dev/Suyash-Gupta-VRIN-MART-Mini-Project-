const urlProduct = new URLSearchParams(window.location.search);
const productId = urlProduct.get('id');

const container = document.querySelector('main');

container.style.display = 'flex';
container.style.gap = '100px';            
container.style.margin = '30px 80px';     
container.style.fontFamily = 'Arial, sans-serif';
container.style.border = '2px solid #ccc';
container.style.borderRadius = '20px';
container.style.padding = '32px';
container.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; 

fetch(`https://dummyjson.com/products/${productId}`)
    .then((res) => res.json())
    .then((product) => {
        container.innerHTML = '';


        let leftSide = document.createElement('div');
        leftSide.style.flex = '1'; 

        let imgTag = document.createElement('img');
        imgTag.src = product.thumbnail;
        imgTag.style.width = '100%';
        imgTag.style.objectFit = 'contain';
        imgTag.style.borderRadius = '12px';
        imgTag.style.backgroundColor = '#f8f9fa'; 

        leftSide.appendChild(imgTag);


        
        let rightSide = document.createElement('div');
        rightSide.style.flex = '1.2'; 
        rightSide.style.display = 'flex';
        rightSide.style.flexDirection = 'column';
        rightSide.style.gap = '15px'; 


        let headingTag = document.createElement('h1');
        headingTag.textContent = product.title;

        headingTag.style.margin = '0';
        headingTag.style.color = '#222';

        let brandTag = document.createElement('h4');
        brandTag.textContent = `Brand: ${product.brand }`;

        brandTag.style.margin = '0';
        brandTag.style.color = '#666';

    
        let descTag = document.createElement('p');
        descTag.textContent = product.description;
        descTag.style.margin = '0';
        descTag.style.lineHeight = '1.6';
        descTag.style.color = '#444';

         let priceTag = document.createElement('h2');
        priceTag.textContent = `Price: ₹ ${Math.ceil(product.price * 95)}/-`;
        
        priceTag.style.margin = '0';
        priceTag.style.color = '#e44d26';
        priceTag.style.fontSize = '25px';


        let cart = document.createElement('button');
        cart.textContent = "Add to Cart";

        cart.style.backgroundColor = '#ff9f00';
        cart.style.color = 'white';
        cart.style.border = 'none';
        cart.style.padding = '15px 30px';
        cart.style.fontSize = '16px';
        cart.style.fontWeight = 'bold';
        cart.style.borderRadius = '8px';
        cart.style.cursor = 'pointer';
        cart.style.width = 'fit-content'; 
        cart.style.marginTop = '10px';



        rightSide.appendChild(headingTag);
        rightSide.appendChild(brandTag);
        rightSide.appendChild(descTag);
        rightSide.appendChild(priceTag);
        rightSide.appendChild(cart);


        container.appendChild(leftSide);
        container.appendChild(rightSide);

        document.title = `${product.title} - VRIN-Mart`;
    })
    .catch((err) => {
        console.log("Error fetching single product", err);
        container.innerHTML = "<h2>Failed to load product details.</h2>";
    });