// factorial
// 숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.

// 팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.

// 예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.

function factorial(val) {
  if (val === 0) return 1;
  if (val === 1) return 1;
  let newVal = val - 1;
  return val * factorial(newVal);
}
