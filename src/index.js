/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let len = 0;
    for (let i = 0, lenght = preferences.length; i < lenght; i++) {
      const req1 = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
      const req2 = i + 1 !== preferences[i];
      if (req1 && req2) {
          len++;
      }
  }
  return (len / 3);
};