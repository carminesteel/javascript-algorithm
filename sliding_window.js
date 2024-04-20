function maxSubarraySum(valueArray, size){
  // size가 valueArray 길이보다 크면 null 리턴.
  if(size > valueArray.length){
    return null;
  }
  // 비교 대상이 될 값을 할당한다.
  var max = 0;
  // size의 시작이 될 index 값을 할당한다.
  var index = 0;
  
  // 순회하다가 valueArray.length - size 가 index + 1 값과 같으면 중지.
  while(index + 1 !== valueArray.length){
    // index부터 받은 배열의 size 만큼만 가져다가 더한다.
    var newValue= valueArray.slice(index, index+size);
    var sum = 0;
    newValue.map((e) => {
      sum = sum+e;
    })
    // 더한 값과 max 값을 비교 후 max를 할당.
    if(sum > max){
      max = sum;
    }
    index++;
  }
  console.log(max);
  return max;
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null