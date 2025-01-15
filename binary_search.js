function binarySearch(arr, val){
    let start = 0;
    let end = arr.length-1;
    
    // 반복
    // 좌와 우의 범위를 계속 좁힌다.
    // 좌는 무조건 우보다 작아야 한다.
    // 이 조건동안 루프를 실행한다.
    while(start < end){
        // 주어진 배열에서 중간값을 할당한다.
        // 최대+최소 나누기 2를 하고 올림.
        let pointer = Math.ceil((start+end)/2);
        // 포인터가 val과 같다면 포인터 값을 리턴
        if(arr[pointer] === val){
            return pointer;
        }
        // pointer를 기준으로 좌측과 크기 비교
        // 비교 후 좌보다 크면 start를, 우보다 크면 end를 수정
        if(val < arr[pointer]){
            end = pointer;
        }else{
            start = pointer;
        }    
    }
    return -1;
}