/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counter = {};

    for(let key of nums) {
        counter[key] ? counter[key]++ : counter[key] = 1; 
    }
    
    let sortValue = [];
    
    for(let key in counter) {
        sortValue.push([key, counter[key]]);
    }

    let newArr = sortValue.sort((a,b) => b[1] - a[1]).slice(0, k).map((a) => a[0]);

    return newArr
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
// console.log(topKFrequent([1,2], 2));c
