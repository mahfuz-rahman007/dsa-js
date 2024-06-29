/**
 * Multiple Pointer Pattern
 * 
 * Here use one or more pointer to array or string index and move it as where as like
 */

function areThereDuplicates(...args) {
    if (!args.length) return false;

    args.sort((a,b) => {
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    })
  
    let start = 0;
    let next = 1;

    while (next < args.length) {
        
        if(args[start] === args[next]) {
            return true;
        }

       start++;
       next++;

    }
return false;
  
}
  
  console.log(areThereDuplicates(1, 2, 3)); // false
  console.log(areThereDuplicates(1, 2, 2)); // true
  console.log(areThereDuplicates("a", "b", "c", "a")); // true