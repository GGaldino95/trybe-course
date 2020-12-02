function fibonacci(n) {
    let fib = 0;
    for(let i = 1; i <= n; i++) {
        fib += i;
    }

    return fib;
}


let n = 5;
console.log(fibonacci(n));