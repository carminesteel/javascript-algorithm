// function findLongestSubstring(value) {
//   var best = 0;

//   var pointer1 = 0;
//   var pointer2 = 0;

//   if (value.length === 0) {
//     return best;
//   }

//   while (pointer2 <= value.length) {
//     var tempObj = {};
//     var tempArr;

//     if (best > value.length) {
//       break;
//     }

//     tempArr = value.slice(pointer1, pointer2);
//     for (var item of tempArr) {
//       var loopBest = 0;

//       if (loopBest > tempArr.length) return;

//       if (tempObj[item] === undefined) {
//         tempObj[item] = 1;
//         //check length of keys.
//         if (Object.keys(tempObj).length > loopBest) {
//           loopBest = Object.keys(tempObj).length;
//         }
//       } else {
//         //check length of keys.
//         if (Object.keys(tempObj).length > loopBest) {
//           loopBest = Object.keys(tempObj).length;
//         }
//         // reset.
//         tempObj = {};
//         pointer1++;
//         pointer2 = pointer1;
//       }

//       if (best < loopBest) {
//         best = loopBest;
//       }
//     }
//     pointer2++;
//   }
//   console.log(best);
//   return best;
// }

function findLongestSubstring(str) {
  console.log(str);
  // 제일 길었던 값.
  let longest = 0;
  //
  let seen = {};
  // 시작하는 포인터
  let start = 0;

  // 받은 스트링 만큼 루프.
  for (let i = 0; i < str.length; i++) {
    // 루프를 돌며 타겟이 되는 문자열 할당.
    let char = str[i];

    // 해당 값이 seen에 이미 할당 된 경우 pass
    if (seen[char]) {
      console.log(`${char} : ${seen[char]}`);
      start = Math.max(start, seen[char]);
    }

    // 제일 길었던 값 할당.
    // 최댓값 산출.
    // index가 0인 경우가 있기 때문에 +1
    longest = Math.max(longest, i - start + 1);
    // 해당 문자를 본 인덱스를 할당 ex) s : 6
    // index가 0인 경우가 있기 때문에 +1 (몇번째에 있었냐)
    seen[char] = i + 1;
  }
  console.log(longest);
  return longest;
}

// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

// findLongestSubstring(""); // 0
// findLongestSubstring("rithmschool"); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
// Time Complexity - O(n)
