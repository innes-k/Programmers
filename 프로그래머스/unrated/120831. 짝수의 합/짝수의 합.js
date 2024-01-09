function solution(n) {
    let answer = 0;
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            answer = answer+i
        }
    } return answer;
}