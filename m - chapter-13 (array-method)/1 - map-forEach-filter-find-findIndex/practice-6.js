/* 
৬. তোর বন্ধুদের নামের লিস্ট আবারও আছে ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল।
 */

const friends = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']

const findLetter = friends.map(letter => letter[2])
console.log(findLetter);