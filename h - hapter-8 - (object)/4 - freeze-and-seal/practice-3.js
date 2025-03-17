/* 
৩. const book = { title Harry Potter, author JK Rowling, pages 500}; Object.seal() ব্যবহার করে অবজেক্ট সিল কর। তারপর author প্রোপার্টি চেঞ্জ করে দেখ।
 */
const book = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pages: 500
};
Object.seal(book)
book.author = 'JKR'; // change hobe, karon seal korle old man change hoy
console.log(book);