function findLongestSubstring(value){

    var best = {};

    var pointer1 =0;
    var pointer2 =0;

    while(pointer2 <= value.length){
        var tempObj = {};
        var tempArr;
        tempArr = value.slice(pointer1, pointer2);

        for(var item of tempArr){
          console.log(tempArr);

          if(tempObj[item] === undefined){
            console.log(tempArr);
            console.log(pointer2);
            tempObj[item] = 1;
          }else{
            return;
            tempObj[item] +=1;
          }  
        }
        
        

        console.log(tempObj);

        // tempObj.forEach(e => {
        //   console.log(e);
        // });
      
        
        pointer2++;
    }
  }
  

// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)