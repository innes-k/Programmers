function solution(n) {
    // n이 짝수이면 (수박 * n/2)
    // n이 홀수이면 
    // 1) n=1이면 (수*1)
    // 2) n>1이면 수박*(th.floor(n/2)) + 수
    let watermelon = '수박'
    let half_watermelon = '수'
    
    if (n%2 === 0) {
        let answer1 = watermelon.repeat(n/2);
        return answer1;
    } else if (n === 1) {
        return half_watermelon;
    } else {
        let answer2 = watermelon.repeat(Math.floor(n/2)) + half_watermelon;
        return answer2;
    }
}