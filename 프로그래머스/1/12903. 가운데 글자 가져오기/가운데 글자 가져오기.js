function solution(s) {
    let arr = s.split('')
    if(arr.length % 2 !== 0) {
        let idx = (arr.length-1)/2;
        console.log(s[idx])
        return s[idx];
    } else {
        let idx2 = arr.length/2 -1
        let idx3 = arr.length/2
        return (s[idx2]+s[idx3]);
    }
}