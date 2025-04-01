// Project: Vowel Counter
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log("Vowels in 'hello':", countVowels("hello"));
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));