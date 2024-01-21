function solution(a, b) {
    // for문으로 a[i]*b[i]를 반복하는 새로운 배열 만들기
    // reduce로 배열 요소 다 더하기
    let Arr = [];
    for(let i = 0; i < a.length; i++) {
        Arr.push(a[i]*b[i]);
    }
    let answer = Arr.reduce((a,b) => a+b);
    return answer;
}