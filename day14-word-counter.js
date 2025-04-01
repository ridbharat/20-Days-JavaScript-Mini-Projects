// Project: Word Counter
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

const sampleText = "This is a sample sentence for word counting.";
console.log("Word count:", countWords(sampleText));