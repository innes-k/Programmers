function solution(numbers) {
    let result = numbers.reduce(function(arr, cur, idx, src) {
        return arr + cur
    }, 0)
    
    let result2 = result / numbers.length;
    return result2;
}