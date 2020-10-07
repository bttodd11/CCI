// There is going to be 3 possible edits
// Replace, insert, remove
// Replace length -1  should be identical 
// Insert length + 1 should be identical but it shold hvae 
// Remove 3 should be identical

let hash = {}

const oneAway = (firstWord, secondWord) => {
    if (Math.abs(firstWord.length - secondWord.length) > 1) {
        console.log("These words are not one edit away")
    }

    if (firstWord.length == secondWord.length) { 
        // If this is true we can assume that this will either be a
        // replace or a failed replace

        for (var index = 0; index < firstWord.length; index++) {
            let letter = firstWord.charAt(index);
            let secondLetter = secondWord.charAt(index);

            if (hash[letter]) {
                delete hash[letter]
            }
            else if (!hash[letter]) {
                hash[letter] = true
            }

            if (hash[secondLetter]) {
                delete hash[secondLetter]
            }
            else if (!hash[secondLetter]) {
                hash[secondLetter] = true;
            }
        }

        if (Object.keys(hash).length <= 2) {
            console.log("This is a replace edit")
        }

    }

    if (Math.abs(firstWord.length - secondWord.length) == 1) {
        // If this is true it is either a remove or insert

        if(firstWord.length > secondWord.length){
            // If the firstwords length is greater than the second words length then we are 
            // testing for removal/
            let storedArr = []
            for(var index = 0; index < firstWord.length; index++){
                // Making our hashtable 
                let value = firstWord.charAt(index);
                 storedArr.push(value)

 
            }
            for( var secondIndex = 0; secondIndex < secondWord.length; secondIndex++){
                let secondValue = secondWord.charAt(secondIndex);

                let removeInd = storedArr.indexOf(secondValue);
                storedArr.splice(removeInd, 1);
            }
          
            if(storedArr.length == 1){
              console.log("These values are a removal")
            }
        }
    }

}


oneAway("Pales", "Pale")