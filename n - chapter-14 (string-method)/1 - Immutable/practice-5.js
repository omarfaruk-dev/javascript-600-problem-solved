/* 
৫. const text = 'Immutable'; স্ট্রিংয়ের দৈর্ঘ্য বের কর এবং চেক কর এটি mutable কি না 
*/

const text = 'Immutable';
console.log(text.length);
text[0] = 'z'; 
console.log(text); 