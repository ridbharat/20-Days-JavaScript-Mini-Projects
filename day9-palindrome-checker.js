// Project: Palindrome Checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log("Is 'madam' a palindrome?", isPalindrome("madam"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));