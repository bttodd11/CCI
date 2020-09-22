// Implement an algorithm to determine if a string has all unique characters.


let uniChar = (string) => {
    let fillArr = string.split("")

    let finalFilter = [... new Set(fillArr)];

    if (fillArr.length == finalFilter.length) {
        console.log('All characters are unique')
    }
    else {
        console.log("Characters are not unique")
    }
} 



uniChar("Brian")