/**
 * Find A Small String in a big string 
 */

function naiveStringSearch(bigString, string)
{
    let count = 0;

    for (let i = 0; i < bigString.length; i++) {
        
        let innerCount = 0;
        for (let j = 0; j < string.length; j++) {
            
            if(bigString[i+j] !== string[j]) {
                break;
            }
            innerCount++;
        }

        if(innerCount === string.length) {
            count++;
        }
        
    }
    return count;
}

console.log(naiveStringSearch("the Who ever wins the war becomes the justice", "the"));