/**
 * You have been given a string of lowercase letters.

Write a function called first_non_repeating_char(string) that finds the first non-repeating character in the given string using a hash table (dictionary). If there is no non-repeating character in the string, the function should return None.

For example, if the input string is "leetcode", the function should return "l" because "l" is the first character that appears only once in the string. Similarly, if the input string is "hello", the function should return "h" because "h" is the first non-repeating character in the string.
 */

function first_non_repeating_char(string) {
    let counter = new Map();

    for (let char of string) {
        counter.get(char) ? counter.set(char, counter.get(char) + 1) : counter.set(char, 1); 
    }

    for (let char of string) {
        if(counter.get(char) === 1) {
            return char;
        }
    }
    return false;
}


console.log(first_non_repeating_char("leetcode")); // l
console.log(first_non_repeating_char("hello")); // h
console.log(first_non_repeating_char("mamun")); // a
