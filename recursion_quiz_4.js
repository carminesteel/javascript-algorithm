// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
// 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.

function recursiveRange(value) {
  console.log(value);
  // 전달받은 value 값에서 -1을 한 후 리턴.
  let nextValue = value - 1;

  // nextValue값이 0보다 작으면 바로 리턴. base case.
  if (nextValue === 0) return 1;
  return value + recursiveRange(nextValue);
}

console.log(recursiveRange(6));
