function solution(arr) {
    let add = arr.reduce(function(arr,cur,idx,src){
        return arr + cur;
    })
    return add / arr.length;
}