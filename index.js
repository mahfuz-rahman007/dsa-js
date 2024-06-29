function areThereDuplicates() {
  if (!arguments.length) return false;

  // Frequency Counter Pattern
  let frequency = {};

  for (let i = 0; i < arguments.length; i++) {
    if (frequency[arguments[i]]) {
      frequency[arguments[i]]++;
    } else {
      frequency[arguments[i]] = 1;
    }
  }

  console.log(frequency);

  for (let key in frequency) {
    if (frequency[key] == 2) {
      return true;
    }
  }
  
  return false;

  // Multiple Pointer Pattern
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
