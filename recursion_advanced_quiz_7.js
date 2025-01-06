const capitalizeWords = (array) => {
  if (array.length === 0) return [];

  const popped = array.pop();
  const result = capitalizeWords(array);
  result.push(popped.toUpperCase());
  return result;
};
