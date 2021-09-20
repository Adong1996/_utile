function uniquel(arr) {
  return [...new Set(arr)]
}

function unique2(arr) {
  var obj = {};
  return arr.filter(ele => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  })
}

function unique3(arr) {
  var result = [];
  arr.forEach(ele => {
    if (result.indexOf(ele) === -1) {
      result.push(ele)
    }
  });
  return result;
}