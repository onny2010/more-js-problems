const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 14500, camera: 8, storage: 8 },
    { name: 'xiaomi m3', price: 12500, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 13500, camera: 8, storage: 32 },
    { name: 'onePlus m10', price: 50500, camera: 10, storage: 32 },
];
let cheapest = phones[0];
for (const phone of phones) {
    // compare price only 
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);