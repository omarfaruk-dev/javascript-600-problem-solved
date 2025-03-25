/* 
৩. shopping cart অবজেক্ট বানা, যার মধ্যে products (array of products) total price (সবগুলো প্রোডাক্টের টোটাল প্রাইস) এবং user details (name, id, contact) থাকবে। এরপর এটাকে JSON স্ট্রিংয়ে কনভার্ট কর।
*/
const shoppingCart = {
    user: 'Omar',
    id: 100,
    contact: 'omarfaruk.dev@gmail.com',
    products: [
        { name: 'Shirt', price: 450 },
        { name: 'panjabi', price: 1450 },
        { name: 'pant', price: 900 },
    ],
    totalPrice: 450 + 1450 + 900
}
const makeJson = JSON.stringify(shoppingCart)
console.log(makeJson);