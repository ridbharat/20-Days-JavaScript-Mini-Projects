// Project: Email Validator
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log("test@example.com valid?", isValidEmail("test@example.com"));
console.log("invalid.email valid?", isValidEmail("invalid.email"));