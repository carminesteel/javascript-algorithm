//전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오. 팔린드롬이 아닐 경우 false 를 반환합니다.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
isPalindrome("amanaplanacanalpanama"); // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // 첫번째 문자열과 마지막 문자열이 동일하지 않으면 false 리턴
  // str/2가 홀수가 아니면 false 리턴

  if (str.length === 0) return true;
  if (str.length % 2 === 0) return false;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}
