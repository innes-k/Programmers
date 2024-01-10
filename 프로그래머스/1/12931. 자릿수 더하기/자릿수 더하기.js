function solution(n)
{
    return (n+'').split('').reduce((a,b) => a+b*1, 0);
}