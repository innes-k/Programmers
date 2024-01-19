function solution(phone_number) {
    // 1. phone_number를 문자 배열화
    // 2. 배열의 끝 4개 빼고 나머지를 *로 바꿔주기 (For문)
    // 3. 배열 요소들 합쳐서 하나의 문자열로 만들기 (join 메서드)

    let phone_strArr = phone_number.split('');
    for (let i=0; i < phone_strArr.length -4; i++) {
        phone_strArr[i] = '*';
    }
    let answer = phone_strArr.join('')
    return answer;
}