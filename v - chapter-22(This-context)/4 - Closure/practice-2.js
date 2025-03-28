/* 
২. তুই একটা fridgeTracker() ফাংশন বানা এবং তোর মেসের সবার জন্য আলাদা আলাদা ক্লোজার বানা। যাতে যে যতবার ফ্রিজ ওপেন করবে, তার কাউন্টার তত বাড়বে 
*/

function fridgeTracker(name) {
    let count = 0;
    return function () {
        count++;
        console.log(`${name} opened the fridge ${count} times.`);
    };
}


const omarTracker = fridgeTracker("Omar");
const farukTracker = fridgeTracker("Faruk");
const bossTracker = fridgeTracker("Boss");


omarTracker();
farukTracker();
bossTracker();

omarTracker();
farukTracker();
