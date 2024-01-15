function solution(n) {
    let arr = String(n).split('');
    let arr_sort = arr.sort((a,b)=>b-a);
    let answer = arr_sort.join('');
    return Number(answer);
}

