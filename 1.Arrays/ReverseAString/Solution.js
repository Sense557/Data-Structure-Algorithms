// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let n = s.length;
    let temp;
    let i = 0;
    let j = n-1;

    while (i <= j) {

        // swapping the values
        temp = s [i];
        s [i] = s [j];
        s [j] = temp;

        // move the pointers to the next index/positions
        i++;
        j--;
    }

    
};