// Remove Element
var removeElement = function(nums, val) {

    let k_elements = 0;

    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !== val) {
            nums[k_elements] = nums[index]; 
            k_elements++;
        }
    }

    return k_elements;

};

let arr1 = [3,2,2,3];
console.log(removeElement(arr1,3), arr1); // 2 , [2,2,,]

let arr2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr2,2), arr2); // 5, [0,1,3,0,4,,,]

