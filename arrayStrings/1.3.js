// Write a method that replaces all white spaces in a string with %20 

let urlfy = (str) => {
    let spaceReg = /\s/g;
    let newUrl = (str.replace(spaceReg, '%20'));

    return newUrl;

}


urlfy("Test This String")
