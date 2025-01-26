export let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,quantity) {
    let matchingItem ;
     cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        }
     });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
        });
    }
    saveToStorage();

};

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
};

export function calculateCartQuantity(){
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}


export function updateDeliveryOption(productId , deliveryOptionId){
    let matchingItem ;
     cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        }
     });

     matchingItem.deliveryOptionId = deliveryOptionId;

     saveToStorage();
}

export function updateQuantity(productId , newQuantity){
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}