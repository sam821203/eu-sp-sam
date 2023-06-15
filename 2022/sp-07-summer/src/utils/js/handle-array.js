// 依數字分割陣列
// e.g. var a = [1, 2, 3, 4, 5]; var b = sliceArrayByNumber(a,2)，
// 可以得到b = [[1, 2], [3, 4], [5]]
export function sliceArrayByNumber ( array, subGroupLength, index ) {
  var index = index || 0;
  var newArray = [];

  while(index < array.length) {
      newArray.push(array.slice(index, index += subGroupLength));
  }

  return newArray;
}
