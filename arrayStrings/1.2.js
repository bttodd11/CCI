// Given two strings, write a function to decide if one is a permutation of the other


let permChecker = (fString, sString) => {

    let fChecker = fString.split("");
    let sChecker = sString.split("");
    let counter = 0;

    if(fChecker.length !== sChecker.length){
        console.log("The strings are not a permutation")
        return
    }
    for(let index = 0; index  < fChecker.length; index++){
        for(let secondIndex = 0; secondIndex < sChecker.length; secondIndex++){
            if(fChecker[index] == sChecker[secondIndex]){
                counter += 1;
                break;
            }
        }
        if(counter <= index){
            console.log("The strings are not a permutation")
          return
        }
    }

    console.log("The strings are a permutation")
}


permChecker("", "Test")