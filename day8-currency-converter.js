// Project: Currency Converter
const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.15,
    INR: 74.85
};

function convertCurrency(amount, fromCurrency, toCurrency) {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return (amount * rate).toFixed(2);
}

console.log("100 USD to EUR:", convertCurrency(100, "USD", "EUR"));