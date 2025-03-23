/* 
২. একটা ফাংশন লিখ array-এর শেষ উপাদান দিবে। ইনপুট array না হলে ওয়ার্নিং ম্যাসেজ দিবে।
 */
const getArray = (numbers) => {
    if (Array.isArray(numbers) == false) {
        return 'Please input an Array'
    }
    const lastIndex = numbers[numbers.length-1]
    return lastIndex
}
const array = getArray([5, 3, 9, 15])
console.log(array);
