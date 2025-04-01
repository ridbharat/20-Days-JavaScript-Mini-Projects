// Project: Tip Calculator
function calculateTip(billAmount, tipPercentage = 15) {
    const tip = billAmount * (tipPercentage / 100);
    const total = billAmount + tip;
    
    return {
        tip: tip.toFixed(2),
        total: total.toFixed(2)
    };
}

const result = calculateTip(50, 20);
console.log(`Tip: $${result.tip}, Total: $${result.total}`);