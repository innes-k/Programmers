function solution(a, b) {
    // 1. 빈 배열 만들기
    // 2-1. a <= b 일때, a > b 일때 체크
    // 2-2. for문으로 a부터 b까지 돌기
    // 3. 빈 배열에 넣기
    // 4. 배열 풀고 다 더하기(...Arr, reduce)
    // 5. 4번 값 리턴
    
    
    
    let arr = [];
    if (a <= b) {
       for (let i = a; i <= b; i++) {
        arr.push(i);
     } console.log(arr);
}   else if (a > b) {
        for (let i = b; i <= a; i++) {
        arr.push(i);
     } console.log(arr);
} 
    
    let add = arr.reduce((a, b) => a + b);
    console.log(add);
    return add;
    }
    