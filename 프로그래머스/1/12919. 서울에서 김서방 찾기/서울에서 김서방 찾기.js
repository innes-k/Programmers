function solution(seoul) {
    let index = seoul.findIndex((item)=>{return item==="Kim"});
    return '김서방은 '+ index+ '에 있다';
}