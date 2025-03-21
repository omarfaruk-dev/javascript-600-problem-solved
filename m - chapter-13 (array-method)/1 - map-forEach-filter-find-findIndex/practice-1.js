/* 
১. একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলোর দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই সবগুলো আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ।
 */

itemsPrice = [30, 45, 20, 60, 10];

const increasedPrice = itemsPrice.map(item => item+13);
console.log(increasedPrice);
