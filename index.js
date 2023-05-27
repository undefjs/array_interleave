// @ts-check
'use strict';

/**
 * Returns an interleaved copy of an array.
 * @param {any[]} arr - The input array.
 * @returns {any[]} - The output array.
 * @example
 * // returns [ 1, 4, 2, 3 ]
 * array_interleave([ 1, 2, 3, 4 ]);
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
