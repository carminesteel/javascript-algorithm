function isSubsequence(arg1, arg2) {
    
    var pointer1 = 0;
    var pointer2 = 0;
    
  // arg1 순회하면서 arg2에 같은 값인지 체크.
  // 순회를 다 돌았을 때 pointer1 값이 arg1.legth-1의 값이어야함. 아니면 return false.
  while(pointer1 < arg1.length){
      // 두 값이 맞는지 판단
      if(arg1[pointer1] === arg2[pointer2]){
        // 맞으면 pointer1 값 증가.
        pointer1++;
      }
      //pointer2 는 arg2를 순회하기 때문에 항상 값 증가.
      pointer2++;
  }


  if(pointer1 !== arg1.length){
    return false;
  }else{
    return true;
  }
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)