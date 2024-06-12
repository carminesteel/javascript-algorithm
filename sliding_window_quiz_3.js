function findLongestSubstring(value) {
  var best = 0;

  var pointer1 = 0;
  var pointer2 = 0;

  if (value.length === 0) {
    return best;
  }

  while (pointer2 <= value.length) {
    var tempObj = {};
    var tempArr;

    if (best > value.length) {
      break;
    }

    tempArr = value.slice(pointer1, pointer2);
    for (var item of tempArr) {
      var loopBest = 0;

      if (loopBest > tempArr.length) return;

      if (tempObj[item] === undefined) {
        tempObj[item] = 1;
        //check length of keys.
        if (Object.keys(tempObj).length > loopBest) {
          loopBest = Object.keys(tempObj).length;
        }
      } else {
        //check length of keys.
        if (Object.keys(tempObj).length > loopBest) {
          loopBest = Object.keys(tempObj).length;
        }
        // reset.
        tempObj = {};
        pointer1++;
        pointer2 = pointer1;
      }

      if (best < loopBest) {
        best = loopBest;
      }
    }
    pointer2++;
  }
  console.log(best);
  return best;
}

// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
// Time Complexity - O(n)
