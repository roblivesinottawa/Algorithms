sumUp = n => {
    let result = 0
    for(let i = 1; i <= n; i++){
        result += i
    }
    return result
}

console.log(sumUp(1000))
// this algorithm will execute in linear time

const SumUp = n => (n / 2) * (1 + n) 
console.log(SumUp(1000))
// this algorithm will execute faster since there is no iteration and it uses a mathematical one liner expression
// constant time
