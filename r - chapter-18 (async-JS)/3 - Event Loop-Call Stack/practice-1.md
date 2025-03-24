**১. ইভেন্ট লুপ কীভাবে কাজ করে, বিস্তারিত ব্যাখ্যা কর।**


**ইভেন্ট লুপ** হলো **JavaScript-এর একটি মেকানিজম**, যা **Call Stack এবং Callback Queue এর মধ্যে সমন্বয় করে**। এর ফলে **অ্যাসিনক্রোনাস (Asynchronous) টাস্ক গুলো সঠিক সময়ে এক্সিকিউট হয়।**  

---

## ** JavaScript এর Execution Flow (যেভাবে কোড রান করে)**
JavaScript **Single-Threaded**, মানে একই সময়ে একটাই কাজ করতে পারে। তবে **Event Loop থাকার কারণে JavaScript অ্যাসিনক্রোনাস কাজ করতে পারে।**  

একটি **JavaScript কোড রান হওয়ার সময় মূলত 3টি জিনিস ঘটে:**  

1️⃣ **Call Stack** - এখানে ফাংশন গুলো এক্সিকিউট হয়।  
2️⃣ **Web APIs / Task Queue** - অ্যাসিনক্রোনাস টাস্ক (setTimeout, fetch API, DOM Events) এখানে যায়।  
3️⃣ **Event Loop** - এটি দেখেশুনে ঠিক করে কখন অ্যাসিনক্রোনাস কোডকে Call Stack-এ পাঠানো হবে।  

---

## ** ইভেন্ট লুপ কীভাবে কাজ করে? (Step-by-Step)**
1. **প্রথমে JavaScript কোড Call Stack-এ এক্সিকিউট হয়।**  
2️. **যদি কোনো অ্যাসিনক্রোনাস টাস্ক (setTimeout, fetch, DOM Event) থাকে, তাহলে সেটা Web API-তে পাঠানো হয়।**  
3️. **Web API অ্যাসিনক্রোনাস টাস্ক শেষ হলে, তা Callback Queue তে পাঠায়।**  
4️. **Event Loop চেক করে, Call Stack খালি হলে Callback Queue থেকে কাজ নিয়ে Call Stack-এ পাঠিয়ে দেয়।**  
5️. **Call Stack তখন সেই ফাংশন এক্সিকিউট করে।**  

---

## ** ইভেন্ট লুপের কাজ সংক্ষেপে:**  
✔ **Call Stack খালি হলে Event Loop নতুন টাস্ক নিয়ে আসে।**  
✔ **Microtask Queue (Promise) এর কাজ আগে এক্সিকিউট হয়।**  
✔ **Callback Queue (setTimeout, fetch) এর কাজ পরে এক্সিকিউট হয়।**  
✔ **ইভেন্ট লুপ মূলত অ্যাসিনক্রোনাস টাস্ককে সঠিক সময়ে Call Stack এ পাঠায়।**  

---

## ** সংক্ষেপে মনে রাখার ফর্মুলা:**
**"Call Stack খালি হলে, Event Loop কাজ নেয় এবং এক্সিকিউট করে!"** 

---
