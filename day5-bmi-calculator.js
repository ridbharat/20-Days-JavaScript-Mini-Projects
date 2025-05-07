// Project: BMI Calculator
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let category;
    
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
    
    return { bmi: bmi.toFixed(2), category };
}

const result = calculateBMI(70, 1.75);
console.log(`BMI: ${result.bmi}, Category: ${result.category}`);