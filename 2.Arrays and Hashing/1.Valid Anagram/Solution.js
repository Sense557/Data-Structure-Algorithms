/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-anagram/
 * 
 */
var isAnagram = function(s, t) {
    
    const mp = {};

    if (s.length != t.length) return false;

    // prepare frequency map of s
    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]]) {
            // if it is defined we land here
            mp[s[i]] += 1;
        }else {
            // if it is undefined we land here
            mp[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if(mp[t[i]] === undefined) {
            // if there is character in t, which is not present in s
            return false;
        }else {
            mp[t[i]] -= 1; // if occurrence found, decrease frequency
            if (mp[t[i]] == 0) {
                delete mp[t[i]];
            }
        }
    }
    return Object.keys(mp).length == 0;
};