/**
 * Get all the string from the nested obj
 *  
 */

function collectStrings(object) {
    let strings = [];

    for (const key in object) {

        if(typeof object[key] === "object") {
            strings = strings.concat(collectStrings(object[key]));
        } else if(typeof object[key] === "string") {
            strings.push(object[key]);
        }
        
    }
    return strings;
};


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])