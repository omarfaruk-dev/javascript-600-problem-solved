/* 
১. ডুপ্লিকেট রিমুভ করার পুরা কোড নিজে বুঝে বুঝে লিখে এই অ্যারে [1, 5, 61, 5, 87, 7, 5, 81, 61]; দিয়ে চেক করবি 
// */

function makeUnique(array){
    let unique = []
    for(let number of array){
        if(unique.includes(number)===false){
            unique.push(number)
        }
    }
    return unique
}

const result = makeUnique([1, 5, 61, 5, 87, 7, 5, 81, 61]);
console.log(result);