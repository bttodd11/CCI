// String Compression


let strComp = (str) => {
let finalString = [];
let counter = 1;


for( let index = 0; index < str.length; index++){
    let curLet = str.charAt(index);
    console.log(curLet)

    if(curLet == str.charAt(index + 1)){
        counter += 1;
    }

    else {
        finalString.push(curLet + counter)
        counter = 1;
    }
}
console.log(finalString.join(""))
}

strComp('aaabcchhhhhhhhhhhcdee')

