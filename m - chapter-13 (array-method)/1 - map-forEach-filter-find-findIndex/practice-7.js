/* 
৭. ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack'] এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর।
 */
const names = ['Tom', 'Harry', 'Sam', 'Jack']
const findLetter = names.find(name =>name.startsWith("H"))
console.log(findLetter);
