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
        console.log(product)
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


//  ye alag alag line me show karne ka code hai isko ek hi line me lana hai vo age hai 


        // let brandTag = document.createElement('h4');
        // brandTag.textContent = `Brand: ${product.brand }`;

        // brandTag.style.margin = '0';
        // brandTag.style.color = '#666';



        // let category = document.createElement('h4');
        // category.textContent = `Category: ${product.category }`;

        // category.style.marginTop = '0';
        // category.style.color = '#666';

        let brandTag = document.createElement('h4');
        brandTag.textContent = `Brand: ${product.brand } || Category: ${product.category }`;

        brandTag.style.marginTop = '0';
        brandTag.style.color = '#666';

    
        let descTag = document.createElement('p');
        descTag.textContent = product.description;

        descTag.style.margin = '0';
        descTag.style.lineHeight = '1.6';
        descTag.style.color = '#444';


      let Product_Specifications = document.createElement('h3');
      Product_Specifications.textContent=`Product Specifications` ;
      Product_Specifications.style.marginBottom = '0';

     let dimensions = document.createElement('p');
     dimensions.textContent = `Dimensions: ${product.dimensions.width } × ${product.dimensions.height } × ${product.dimensions.depth } ` ;

        dimensions.style.margin = '0';
        dimensions.style.lineHeight = '1.6';
        dimensions.style.color = '#444';


        let weight = document.createElement('p');
        weight.textContent =`Weight: ${ product.weight } g`;

        weight.style.margin = '0';
        weight.style.lineHeight = '1.6';
        weight.style.color = '#444';


      let Policies_Shipping = document.createElement('h3');
      Policies_Shipping.textContent=`Policies & Shipping` ;
      Policies_Shipping.style.marginBottom = '0';

        let Shipping_Info = document.createElement('p');
         Shipping_Info.textContent = `Shipping Info: ${product.shippingInformation } ` ; 
         
         Shipping_Info.style.margin = '0';
        Shipping_Info.style.lineHeight = '1.6';
        Shipping_Info.style.color = '#444';



        let Return_Policy = document.createElement('p');
        Return_Policy.textContent = `Return Policy: ${product.returnPolicy } ` ;  

        Return_Policy.style.margin = '0';
        Return_Policy.style.lineHeight = '1.6';
        Return_Policy.style.color = '#444';



        let Warranty = document.createElement('p');
        Warranty.textContent = `Warranty: ${product.warrantyInformation } ` ;  

        Warranty.style.margin = '0';
        Warranty.style.lineHeight = '1.6';
        Warranty.style.color = '#444';




// update isko bhi ek line me leke ana hai price original price and discount 

    //     let priceTag = document.createElement('h2');
    //     priceTag.innerHTML = `Price: ₹ <del>${Math.ceil(product.price * 95)}</del> /-`;
        
    //     priceTag.style.margin = '0';
    //     priceTag.style.color = '#e44d26';
    //     priceTag.style.fontSize = '20px';


    //     let Discountedprice = document.createElement('h2');
    //     let priceInRupees = product.price * 95;
    //     let finalPrice = priceInRupees - (priceInRupees * (product.discountPercentage / 100));
    //      Discountedprice.textContent = `Discounted Price: ₹ ${Math.round(finalPrice)}/-`;
    // //  Discountedprice.textContent = `Discounted Price: ₹ ${finalPrice.toFixed(2)}/-`;   
    //     Discountedprice.style.margin = '0';
    //     Discountedprice.style.color = '#e44d26';
    //     Discountedprice.style.fontSize = '25px';

    //      let discountPercentage = document.createElement('p');
    //     discountPercentage.textContent = `Discount: ${Math.round(product.discountPercentage) }%`;

    //     discountPercentage.style.margin = '0';
    //     discountPercentage.style.color = '#666';


        let Discountedprice = document.createElement('h2');
        let priceInRupees = product.price * 95;
        let finalPrice = priceInRupees - (priceInRupees * (product.discountPercentage / 100));
         Discountedprice.innerHTML = `Price: ₹${Math.round(finalPrice)}/-   <del> ₹ ${Math.ceil(product.price * 95)}</del>/- (${Math.round(product.discountPercentage) }% OFF)`;
    //  Discountedprice.textContent = `Discounted Price: ₹ ${finalPrice.toFixed(2)}/-`;   
        Discountedprice.style.margin = '0';
        Discountedprice.style.color = '#e44d26';
        Discountedprice.style.fontSize = '20px';


        let rating = document.createElement('p');
        rating.textContent = `Rating: ${product.rating }/5 Stars`;

         rating.style.margin = '0';
        rating.style.lineHeight = '1.6';
        rating.style.color = '#444';







// update :- stock and stck status ko ek me hi mix kiya hai matlab ek line me 

    // let stock = document.createElement('p');
    //     stock.textContent = `Stock Available: ${product.stock } `;
        

    //     stock.style.margin = '0';
    //     stock.style.color = '#666';

        
  let availabilityStatus = document.createElement('p');
  let stock = document.createElement('p');

        availabilityStatus.textContent = `Availability: ${product.availabilityStatus } (${product.stock} Available)`;

        availabilityStatus.style.margin = '0';
        availabilityStatus.style.color = '#666';


        let minimumOrderQuantity = document.createElement('p');
        minimumOrderQuantity.textContent = `Minimum Order Quantity: ${product.minimumOrderQuantity }`;

        minimumOrderQuantity.style.margin = '0';
        minimumOrderQuantity.style.color = '#666';



        let cart = document.createElement('button');
        cart.textContent = "Add to Cart";

        cart.style.backgroundColor = '#ff9f00';
        cart.style.color = 'white';
        cart.style.border = 'none';
        cart.style.padding = '20px 90px';
        cart.style.fontSize = '16px';
        cart.style.fontWeight = 'bold';
        cart.style.borderRadius = '8px';
        cart.style.cursor = 'pointer';
        cart.style.width = 'fit-content'; 
        cart.style.marginTop = '10px';
        cart.style.marginLeft = '230px';

        cart.addEventListener('click', () => {

    let cartList = JSON.parse(localStorage.getItem('vrin_cart')) || [];

     let calculatedPrice = Math.round((product.price * 95) - ((product.price * 95) * (product.discountPercentage / 100)));

    let existingProduct = cartList.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;

    } 
    else {
        cartList.push({
              id: product.id,
              title: product.title,
             thumbnail: product.thumbnail,
             price: calculatedPrice, 
            quantity: 1
        });
    }

    localStorage.setItem('vrin_cart', JSON.stringify(cartList));
    
    alert(`${product.title} added to cart!`);
});



        rightSide.appendChild(headingTag);
        rightSide.appendChild(brandTag);
       rightSide.appendChild(Discountedprice);
       rightSide.appendChild(rating);
        rightSide.appendChild(descTag);
         rightSide.appendChild(availabilityStatus);
          rightSide.appendChild(minimumOrderQuantity);
          rightSide.appendChild(Product_Specifications);
        rightSide.appendChild(dimensions);
        rightSide.appendChild(weight);
        rightSide.appendChild(Policies_Shipping);
        rightSide.appendChild(Shipping_Info);
        rightSide.appendChild(Return_Policy);
        rightSide.appendChild(Warranty);

        rightSide.appendChild(cart);


        container.appendChild(leftSide);
        container.appendChild(rightSide);

        document.title = `${product.title} - VRIN-Mart`;
    })
    .catch((err) => {
        console.log("Error fetching single product", err);
        container.innerHTML = "<h2>Failed to load product details.</h2>";
    });