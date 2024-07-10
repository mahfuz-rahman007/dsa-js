/**
 * StringyFy a Objects NUmber  
 */

function stringifyNumbers(object) {

    let newObj = {};

    for (const key in object) {
        if(Array.isArray(object[key]) === true) {
            newObj[key] = []; 
        }else if(typeof object[key] === "object") {
            newObj[key] = stringifyNumbers(object[key]);
        } else if(typeof object[key] === "number") {
            newObj[key] = '' + object[key]; 
        } else {
            newObj[key] =  object[key];
        }

    }

    return newObj;
};

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/