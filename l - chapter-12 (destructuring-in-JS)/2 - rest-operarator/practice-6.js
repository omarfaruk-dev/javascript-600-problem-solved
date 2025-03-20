/* 
৬. একটা ফাংশন লেখ, যে সব প্যারামিটারকে রেস্ট অপারেটর দিয়ে একটা array-তে রাখবে, তারপর আর্গুমেন্টগুলো যোগ করবে। ফাংশনটি array-এর উপাদানগুলোর গড় রিটার্ন করবে 
*/
const getAll = ([...all]) => {
    const total = all.reduce((sum, num) => sum + num, 0)
    return (total / all.length);
}
console.log(getAll([1, 3, 5, 6, 4, 80, 20, 10]));