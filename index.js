'use strict';

function array_interleave(arr) {
  const ret = new Array(arr.length);
  const mid = Math.ceil(arr.length / 2);
  for(let i = 0, n = 0, j = 0; i < mid; i++) {
    ret[j++] = arr[i];
    if(i !== (n = arr.length - i - 1)) {
      ret[j++] = arr[n];
    }
  }
  return ret;
}

module.exports = array_interleave;
