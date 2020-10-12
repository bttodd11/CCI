const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
// There is going to be 3 possible edits
// Replace, insert, remove
// Replace length -1  should be identical 
// Insert length + 1 should be identical but it shold hvae 
// Remove 3 should be identical



let hash = {}

const oneAway = (firstWord, secondWord) => {
    let startWord;
    let finderWord;
    if (Math.abs(firstWord.length - secondWord.length) > 1) {
        return false;
    }
    if (firstWord == secondWord) {
        return true;
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
            return true;
        }

    }

    // This is either a removal or addition if the length differs
    // by 1 
    if(Math.abs(firstWord.length - secondWord.length) == 1){
        let newMa = new Map();

    
    if(newMa.size == 1){
        return true
    }
}

}
console.log(oneAway('Pales', 'Paes'))