
function find_pairs(array1, array2, target) {
    array1 = new Set(array1);
    let pairs = [];

    for (let value of array2) {
        let rem = target-value;

        if(array1.has(rem)) {
            pairs.push([rem, value]);
        }
    }

    return pairs;
}


console.log(find_pairs([1,2,3,4,5], [2,4,6,8,10], 7)); // [(5,2), (3.4), (1,6)]