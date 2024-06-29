/**
 * Frequency Counter Patter
 * 
 * Creates A New Object That Store The Frequency Count Of A String Or Array
 */

function areThereDuplicates() {
    if (!arguments.length) return false;
  
    let frequency = {};
  
    for (let i = 0; i < arguments.length; i++) {
      if (frequency[arguments[i]]) {
        frequency[arguments[i]]++;
      } else {
        frequency[arguments[i]] = 1;
      }
    }
  
    for (let key in frequency) {
      if (frequency[key] == 2) {
        return true;
      }
    }
    
    return false;
  
  }
  
  console.log(areThereDuplicates(1, 2, 3)); // false
  console.log(areThereDuplicates(1, 2, 2)); // true
  console.log(areThereDuplicates("a", "b", "c", "a")); // true
  