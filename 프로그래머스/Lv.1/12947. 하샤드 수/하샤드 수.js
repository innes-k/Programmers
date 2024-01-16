function solution(x) {
    // 1. x를 split으로 쪼개기
    // 2. 쪼갠값을 nubmer로 바꿔서 더하기(number로 바꾼 값들 reduce함수로)
    // 3. x가 2번의 값으로 나누어 떨어지는지 체크
    // 4. t/f return
    
    const x_arr = String(x).split('');
    // console.log(n1);
    
    for (let i = 0; i < x_arr.length; i++) {
        x_arr[i] = Number(x_arr[i]);
    } const add = x_arr.reduce((arr, cur) => arr + cur);
    // console.log(add);
    
    return (x % add) === 0
}