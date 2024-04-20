function maxSubarraySum(valueArray, size){
  // 비교 대상이 될 값을 할당한다.
  var max = 0;
  // size의 시작이 될 index 값을 할당한다.
  // 받은 배열의 size 만큼만 가져다가 더한다.
  // 더한 값과 max 값을 비교 후 max를 할당.
  // 순회하다가 valueArray.length - size 가 index + 1 값과 같으면 중지.
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null