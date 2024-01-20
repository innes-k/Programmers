function solution(arr) {
    let minNumber = Math.min(...arr);
    if (arr.length <= 1) {
        return [-1];
    } else {
        let answer = arr.filter((item)=>item !== minNumber)
        return answer;
    } 
}