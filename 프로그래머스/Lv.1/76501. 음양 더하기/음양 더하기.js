function solution(absolutes, signs) {
    let answer = 0;
    for (let i=0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            absolutes[i] = Number(absolutes[i]);
        } else if (signs[i] === false) {
            absolutes[i] = -Number(absolutes[i]);
        } answer = answer + absolutes[i];
    } return answer;
}