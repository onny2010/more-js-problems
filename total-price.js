const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 14500, camera: 8, storage: 8 },
    { name: 'xiaomi m3', price: 12500, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 13500, camera: 8, storage: 32 },
    { name: 'onePlus m10', price: 50500, camera: 10, storage: 32 },
];
let totalPrice = 0;
for (const phone of phones) {
    totalPrice = totalPrice + phone.price;
}
console.log(totalPrice);


// total price with quantity 
const cart = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32, quantity: 2 },
    { name: 'walton m32', price: 14500, camera: 8, storage: 8, quantity: 3 },
    { name: 'xiaomi m3', price: 12500, camera: 8, storage: 16, quantity: 4 },
    { name: 'oppo a2', price: 13500, camera: 8, storage: 32, quantity: 5 },
    { name: 'onePlus m10', price: 50500, camera: 10, storage: 32, quantity: 6 },
];


let cartTotal = 0;
for (const phone of cart) {
    // console.log(phone);
    const phoneTotal = phone.price * phone.quantity;
    cartTotal = cartTotal + phoneTotal;
}
console.log(cartTotal);