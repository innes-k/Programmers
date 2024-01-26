function solution(n) {
    let reversed_n = n.toString(3).split('').reverse().join('');
    return parseInt(reversed_n, 3);
}