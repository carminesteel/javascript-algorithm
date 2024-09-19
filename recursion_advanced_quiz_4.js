function flatten(depthArray) {
  let flattenArray = [];
  for (let i = 0; i < depthArray.length; i++) {
    if (Array.isArray(depthArray[i])) {
      flattenArray = flattenArray.concat(flatten(depthArray[i]));
    } else {
      flattenArray.push(depthArray[i]);
    }
  }

  return flattenArray;
}
console.log(flatten([1, [2, [3, 4], [[5]]]]));
// flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
