const container = document.querySelector('#cart-container');

container.style.display = 'flex';
container.style.gap = '40px';
container.style.margin = '30px 80px';
container.style.fontFamily = 'Arial, sans-serif';

function renderCart() {
    let cart = JSON.parse(localStorage.getItem('vrin_cart')) || [];
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `<h2 style="text-align: center; width: 100%; color: #666;">Your cart is empty! </h2>`;
        return;
    }

    
    let itemsSide = document.createElement('div');
    itemsSide.style.flex = '2';
    itemsSide.style.display = 'flex';
    itemsSide.style.flexDirection = 'column';
    itemsSide.style.gap = '20px';

    let grandTotal = 0;

    cart.forEach((item, index) => {
        grandTotal += item.price * item.quantity;

        let itemCard = document.createElement('div');
        itemCard.style.display = 'flex';
        itemCard.style.alignItems = 'center';
        itemCard.style.justifyContent = 'space-between';
        itemCard.style.border = '1px solid #ccc';
        itemCard.style.borderRadius = '12px';
        itemCard.style.padding = '15px';
        itemCard.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';

    
        let detailsBox = document.createElement('div');
        detailsBox.style.display = 'flex';
        detailsBox.style.alignItems = 'center';
        detailsBox.style.gap = '15px';

        let img = document.createElement('img');
        img.src = item.thumbnail;
        img.style.width = '80px';
        img.style.height = '80px';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '8px';
        img.style.backgroundColor = '#f8f9fa';

        let textInfo = document.createElement('div');
        let title = document.createElement('h3');
        title.textContent = item.title;
        title.style.margin = '0 0 5px 0';
        title.style.fontSize = '16px';

        let price = document.createElement('p');
        price.textContent = `Price: ₹${item.price}/-`;
        price.style.margin = '0';
        price.style.color = '#e44d26';
        price.style.fontWeight = 'bold';

        textInfo.appendChild(title);
        textInfo.appendChild(price);
        detailsBox.appendChild(img);
        detailsBox.appendChild(textInfo);

        
        let controls = document.createElement('div');
        controls.style.display = 'flex';
        controls.style.alignItems = 'center';
        controls.style.gap = '15px';

        let decBtn = document.createElement('button');
        decBtn.textContent = '-';
        decBtn.style.padding = '5px 10px';
        decBtn.style.cursor = 'pointer';
        decBtn.addEventListener('click', () => updateQuantity(index, -1));

        let qtySpan = document.createElement('span');
        qtySpan.textContent = item.quantity;
        qtySpan.style.fontWeight = 'bold';

        let incBtn = document.createElement('button');
        incBtn.textContent = '+';
        incBtn.style.padding = '5px 10px';
        incBtn.style.cursor = 'pointer';
        incBtn.addEventListener('click', () => updateQuantity(index, 1));

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.backgroundColor = '#dc3545';
        removeBtn.style.color = 'white';
        removeBtn.style.border = 'none';
        removeBtn.style.padding = '8px 12px';
        removeBtn.style.borderRadius = '4px';
        removeBtn.style.cursor = 'pointer';
        removeBtn.addEventListener('click', () => removeItem(index));

        controls.appendChild(decBtn);
        controls.appendChild(qtySpan);
        controls.appendChild(incBtn);
        controls.appendChild(removeBtn);

        itemCard.appendChild(detailsBox);
        itemCard.appendChild(controls);
        itemsSide.appendChild(itemCard);
    });

   
    let summarySide = document.createElement('div');
    summarySide.style.flex = '1';
    summarySide.style.border = '2px solid #ccc';
    summarySide.style.borderRadius = '16px';
    summarySide.style.padding = '25px';
    summarySide.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
    summarySide.style.height = 'fit-content';
    summarySide.style.display = 'flex';
    summarySide.style.flexDirection = 'column';
    summarySide.style.gap = '15px';

    let summaryHeading = document.createElement('h2');
    summaryHeading.textContent = 'Order Summary';
    summaryHeading.style.margin = '0';

    let priceSplitup = document.createElement('p');
    priceSplitup.innerHTML = `Subtotal: <span style="float:right;">₹${grandTotal}/-</span>`;
    priceSplitup.style.margin = '0';

    let shippingSplitup = document.createElement('p');
    shippingSplitup.innerHTML = `Shipping: <span style="float:right; color: green;">FREE</span>`;
    shippingSplitup.style.margin = '0';

    let hr = document.createElement('hr');

    let totalBox = document.createElement('h3');
    totalBox.innerHTML = `Grand Total: <span style="float:right; color: #e44d26;">₹${grandTotal}/-</span>`;
    totalBox.style.margin = '0';

    let checkoutBtn = document.createElement('button');
    checkoutBtn.textContent = 'Proceed to Checkout';
    checkoutBtn.style.backgroundColor = '#e6b54d';
    checkoutBtn.style.color = 'white';
    checkoutBtn.style.border = 'none';
    checkoutBtn.style.padding = '12px';
    checkoutBtn.style.borderRadius = '6px';
    checkoutBtn.style.fontSize = '16px';
    checkoutBtn.style.fontWeight = 'bold';
    checkoutBtn.style.cursor = 'pointer';
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for shopping with VRIN-Mart!');
    });

    summarySide.appendChild(summaryHeading);
    summarySide.appendChild(priceSplitup);
    summarySide.appendChild(shippingSplitup);
    summarySide.appendChild(hr);
    summarySide.appendChild(totalBox);
    summarySide.appendChild(checkoutBtn);

    container.appendChild(itemsSide);
    container.appendChild(summarySide);
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('vrin_cart'));
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    localStorage.setItem('vrin_cart', JSON.stringify(cart));
    renderCart();
}

renderCart();