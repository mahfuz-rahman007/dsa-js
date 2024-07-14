/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    let sCounter = {}, tCounter = {};

    for (let index = 0; index < s.length; index++) {
        sCounter[s[index]] ? sCounter[s[index]]++ : sCounter[s[index]] = 1;
        tCounter[t[index]] ? tCounter[t[index]]++ : tCounter[t[index]] = 1;
    }

    console.log(sCounter, tCounter);
    return JSON.stringify(sCounter) === JSON.stringify(tCounter);

};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("ab", "a"));
console.log(isAnagram( "rat", "car"));
