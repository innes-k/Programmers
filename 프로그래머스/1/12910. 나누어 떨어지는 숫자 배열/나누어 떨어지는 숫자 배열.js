function solution(arr, divisor) {
    // 1. 빈배열 만들기
    // 2. arr에서 divisor로 나눠떨어지는 애들 빈배열에 넣기(Push)
    // 3. if 배열이 비어있지 않다면
    // 3-1. 배열 오름차순 정렬, return 배열
    // 4. else if 배열이 비어있다면
    // 4-1. return -1
    
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % divisor === 0) {
            newArr.push(arr[i]);
        }
    }
    if(newArr.length !== 0) {
        newArr.sort((a,b) => a-b);
        return newArr;
    } else if(newArr.length === 0) {
        return [-1];
    }
}