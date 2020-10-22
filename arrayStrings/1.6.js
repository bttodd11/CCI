// String Compression


let strComp = (str) => {
    let finalString = [];
    let counter = 1;


    for (let index = 0; index < str.length; index++) {
        let curLet = str.charAt(index);

        if (curLet == str.charAt(index + 1)) {
            counter += 1;
        }

        else {
            finalString.push(curLet + counter)
            counter = 1;
        }
    }
    finalString = finalString.join("")

    if (finalString.length > str.length) {
        return str
    }
    else {
        return finalString
    }
}

let result = strComp('abccccccccccde')


console.log(result)

