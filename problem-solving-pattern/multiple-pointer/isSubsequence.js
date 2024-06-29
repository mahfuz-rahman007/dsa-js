
/**
 * Find If the all characters in the first string is available in the second one maintaining the order
 * 
 * @param {*} string1 
 * @param {*} string2 
 */
function isSubsequence(string1, string2) {

    let index=0;
    for(let char of string2) {
        if(string1[index] === char) {
            index++;   
        }

        return index == string1.length;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));