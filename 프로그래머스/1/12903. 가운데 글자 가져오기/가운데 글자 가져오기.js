function solution(s) {
    // 문자열 s -> split으로 문자열 배열로 만들기
    // 홀수인 경우 : (첫인덱스 + 마지막인덱스)/2 의 인덱스를 가진 문자 꺼내기
    // 짝수인 경우 : 
    // (length/2 -1), length/2 의 인덱스값 꺼내기
    
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