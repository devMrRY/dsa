let obj = {}
function fib(n){
    if(obj[n]) return obj[n]
    if(n<=2) return 1;
    obj[n] = fib(n-1) + fib(n-2)
    return obj[n];
}

console.log(fib(6))
console.log(fib(16))
console.log(fib(56))