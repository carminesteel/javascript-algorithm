// productOfArray
// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  // 배열을 받는다.
  // 받은 배열의 첫번째 값과 재귀함수의 리턴값을 곱한다.
  // 배열의 길이가 1이면 해당 값을 리턴한다.
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}
