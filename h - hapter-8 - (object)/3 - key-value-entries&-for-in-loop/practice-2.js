/* 
২. এই অবজেক্টটিতে চেক কর, author প্রোপার্টি আছে কি না। const article = { title: "Learning JS", category: "Programming"};
 */

const article = {
    title: "Learning JS",
    category: "Programming"
}

// solution -1 
const checkObjectProperty = Object.entries(article);
console.log(checkObjectProperty.includes('author'));


// solution -2 
if ('author' in article) {
    console.log('Author Property Ase');
} else {
    console.log('Author Property Nai');
}