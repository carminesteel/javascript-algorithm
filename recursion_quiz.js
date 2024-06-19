console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

function power(first, second) {
  if (second === 0) return 1;
  if (second === 1) return first;
  // base case : second가 0 이면 1 리턴.
  // first 값을 second 만큼 반복하여 더해줘야 함.
  // first+first를 수행한다.
  // second는 -1 더한다.
  // 다시 함수를 태운다.
  return first * power(first, second - 1);
}
