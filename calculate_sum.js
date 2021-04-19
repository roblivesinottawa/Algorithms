let arr = [20, 30, 40, 50]

calculateSum = arr => {
    let total = 0
    for(let i of arr){
        total += i
    }
    return total
}
console.log(calculateSum(arr))
// O(n) => linear time complexity
// this is the best of the two solutions




calcSum = arr => arr.reduce((total, arr_) => total + arr_, 0)
console.log(calcSum([20, 30, 40, 50]))