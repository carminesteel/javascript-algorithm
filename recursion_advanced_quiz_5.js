function capitalizeFirst(strArray) {
  // add whatever parameters you deem necessary - good luck!
  const capArray = strArray.map((e) => {
    return e[0].toUpperCase() + e.slice(1);
  });
  return capArray;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
