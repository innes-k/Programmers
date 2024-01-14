function solution(n) {
    let x = Math.sqrt(n);
    let remove_float = Math.floor(x);
    if (x === remove_float) {
        return Math.pow(x + 1, 2);
    } else { return -1; }
}