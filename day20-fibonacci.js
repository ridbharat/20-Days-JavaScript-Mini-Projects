// Project: Fibonacci Sequence Generator
function generateFibonacci(n) {
    const sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    
    return sequence.slice(0, n);
}

console.log("First 10 Fibonacci numbers:", generateFibonacci(10));