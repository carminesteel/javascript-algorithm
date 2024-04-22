function minSubArrayLen (numbers, targetValue){
    // 모든 값의 합이 targetValue보다 낮으면 리턴.
    if(numbers.reduce((acc, cur) => acc + cur)<targetValue)return;

    // 배열 루프를 도는 동안 나온 최적의 수.
    let selected;
    // 해당 배열에서 나올 수 있는 배열의 길이를 뜻한다.
    let loopLength = numbers.length;

    // begin
    // end
    // 각 값은 루프에 따라 다름.
    let end = 1;
    let best;
    for(let i =0; i<numbers.length;i++){
        let newNum = numbers.slice(0,end);
        console.log(newNum);
        let num = newNum.reduce((a,c) => a+c);
        if(best !== undefined){
            best = targetValue - num;
        }else{
            
        }
        end++;
    }
    

    
}

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0