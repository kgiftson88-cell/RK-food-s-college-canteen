/ Cart state management/
let cart = [];

function addToCart(itemName, itemPrice) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    // Clear container
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty</p>';
        cartCount.innerText = '0';
        cartTotalPrice.innerText = '0';
        return;
    }
    
    let totalItems = 0;
    let totalPrice = 0;
    
    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += (item.price * item.quantity);
        
        // Append item HTML element
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>造型 ₹${item.price * item.quantity}</span>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    
    cartCount.innerText = totalItems;
    cartTotalPrice.innerText = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Please add items to your cart before placing an order!");
        return;
    }
    
    alert(`🎉 Thank you for ordering from RK Foods!\n\nYour order has been sent to Rajan. Preparing your delicious food now!`);
    
    // Reset cart after success
    cart = [];
    updateCartUI();
}