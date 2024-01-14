function solution(n) { 
    let stringN = String(n); 
    Arr = stringN.split(''); 
    let reverseN = Arr.reverse()
    let turnNumber = o => o = parseInt(o)
    return reverseN.map(turnNumber); 
}