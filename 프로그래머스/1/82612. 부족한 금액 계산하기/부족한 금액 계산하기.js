function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i = 1; i <= count; i++) {
        totalPrice = totalPrice + price * i;
    } 
    return money > totalPrice ? 0 : totalPrice - money;
}