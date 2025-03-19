/* 
৫. একটা ফাংশন লিখ, যেখানে একটা ভেরিয়েবল স্ট্রিং হিসেবে দিবি, আর সেটার দৈর্ঘ্য রিটার্ন করবে।
 */
function measureLength(sentence) {
    const length = sentence.length;
    return length;
}
const result = measureLength('I want to be a programmer');
console.log(result);