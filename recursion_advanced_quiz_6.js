function nestedEvenSum(obj) {
  let even = 0;
  // add whatever parameters you deem necessary - good luck!
  Object.entries(obj).forEach(([key, value]) => {
    // value 값이 짝수면 더하기 대기열에 넣어놓고 계속 탐색

    if (value % 2 === 0) {
      even += value;
    } else if (value instanceof Object) {
      console.log(value);
      even += nestedEvenSum(value);
    }
  });
  return even;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
