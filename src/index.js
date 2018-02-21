/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let len = 0;
  let set = new Set(preferences);
  for(let i of set.values()) {
    len++;  
  }
  return (len / 3);  // your implementation
};