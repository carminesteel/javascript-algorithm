function minSubArrayLen (numbers, targetValue){

    // 모든 값의 합이 targetValue보다 낮으면 리턴.
    if(numbers.reduce((acc, cur) => acc + cur)<targetValue)return 0;
    
    // 최적배열 길이값
    var best = 0;
    // 최적값의 근거가 되는값
    var bestValue;
    // 배열 사이즈
    var subArraySize = 1;

    // 포인터1
    var p1=0;
    // 포인터2
    var p2=subArraySize;
    


    // 전체 순회를 한 후 subArraySize 증가.
    while(p2 <= numbers.length){
        var sliced = numbers.slice(p1,p2);
        console.log(sliced);
        var sumValue = sliced.reduce((acc, cur) => acc + cur);
        // 더한 값이 목표값보다 크거나 같은 경우
        if(sumValue >= targetValue){
            best = subArraySize;
            bestValue = sumValue;
            break;
        }
        
        p1++
        p2++

        // 멈춰야 할지 체크
        // p2가 인자 배열길이의 최댓값에 도달하면 가능 범위 내에서 subArraySize값을 증가시킨다.
        if(p2 > numbers.length){
            console.log('// p2가 인자 배열길이의 최댓값에 도달하면 가능 범위 내에서 subArraySize값을 증가시킨다.');
            subArraySize ++;
            p1 = 0;
            p2 = subArraySize;
        }
        // subArraySize가 인자의 배열 길이에 도달하면 중단.
        if(subArraySize > numbers.length){
            console.log('break!');
            break;
        }
    }
    console.log(best);
    console.log(bestValue);
    return best;
}

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0