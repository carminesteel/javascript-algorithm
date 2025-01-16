const naiveSearch = (long, short) => {
  let count = 0;

  // long 문자열을 루프
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count += 1;
    }
  }
  return count;
};

function runTests() {
  // 테스트 케이스 1: 패턴이 텍스트의 시작에 있는 경우
  console.log(naiveSearch("hello world", "hello"));

  // 테스트 케이스 2: 패턴이 텍스트의 중간에 있는 경우
  console.log(naiveSearch("hello world", "world"));

  // 테스트 케이스 3: 패턴이 텍스트의 끝에 있는 경우
  console.log(naiveSearch("hello world", "d"));

  // 테스트 케이스 4: 패턴이 텍스트에 없는 경우
  console.log(naiveSearch("hello world", "test"));

  // 테스트 케이스 5: 빈 문자열 패턴
  console.log(naiveSearch("hello world", ""));

  // 테스트 케이스 6: 빈 문자열 텍스트
  console.log(naiveSearch("", "test"));

  // 테스트 케이스 7: 패턴이 여러 번 나타나는 경우
  console.log(naiveSearch("abababab", "aba"));

  // console.log("All test cases passed!");
}

runTests();
