function solution(s) {
  let check_p = s.toLowerCase().split('p').length;
  let check_y = s.toLowerCase().split('y').length;
  return check_p === check_y;
}

