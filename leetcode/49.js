/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let list = {};

  for (let i = 0; i < strs.length; i++) {

    let sortText = strs[i].split("").sort().join("");

    if(list[sortText]) {
        list[sortText].push(strs[i]);
    } else {
        list[sortText] = [];
        list[sortText].push(strs[i]);
    }

  }

  let arr = [];
  for (const key in list) {
    arr.push(list[key]);
  }

  return Object.values(list);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
