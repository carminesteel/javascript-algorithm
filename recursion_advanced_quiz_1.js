// 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.

function reverse(val) {
  if (val.length < 1) return val;
  return reverse(val.slice(1)) + val[0];
}

console.log(reverse("awesome"));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
