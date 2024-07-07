/**
 * Check Palindrome By Recursion
 */

function isPalindrome(text){
    
    function stringRev(string) {
        if(string.length === 0) return '';
        return string[string.length-1] + stringRev(string.slice(-string.length, -1));
    }

    return text === stringRev(text);
}


console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false