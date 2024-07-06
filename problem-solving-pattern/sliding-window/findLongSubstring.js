/**
 * Find The Longest Substring from the string
 */
    // Find The Longest Substring With Distinct Characters
    // take variable start, end, length and counter
    // loop through the whole array.
    // add count of element in counter and increase the end++
    // if found any element in the counter, set the start to that element where it matched, reset the counter.
    //also calculate the length and update the end

function findLongestSubstring(string){


    if(string.length < 1) return 0;

    let start = 0, end = 0, counter = {}, length = 0;
    
    for(let i = 0; end < string.length; i++) {
        
        let char = string[i];

        if(counter[char] > 0) {
            start = counter[char];
            i = start;
            end = start+1;
            counter = {};
            counter[string[i]] = i+1;
        } else {
            counter[char] = i+1;
            end++;
        }

        length = Math.max(length, end-start);
    }

    return length;
}


findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6