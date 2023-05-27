// @ts-check
'use strict';

/**
 * Interleave a number array
 * @param {number[]} arr
 * @returns {number[]}
 * @example
 * // returns [ 1, 8, 2, 7, 3, 6, 4, 5 ]
 * array_interleave([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
 */
export function array_interleave(arr) {
  const len = arr.length;
  const ret = new Array(len);
  const mid = Math.ceil(len / 2);
  for(let i = 0, n = 0, j = 0; i < mid; i++) {
    ret[j++] = arr[i];
    if(i !== (n = len - i - 1)) {
      ret[j++] = arr[n];
    }
  }
  return ret;
}
