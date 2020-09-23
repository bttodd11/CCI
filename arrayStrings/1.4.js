let palPerm = (str) => {
    // Table to store our key value pairs
    let hash = {};
    let charCount = 0;

    for (var index = 0; index < str.length; index++) {
        // Var to hold out index char count
        let checker = str.charAt(index);

        // We do not care about white spaces so if we see
        // one just continue
        if (checker == '') {
            continue;
        }

        // If the key (Var ) is already in the table then
        // delete they key because it has a pair
        if (hash[checker]) {
            delete str[index]
        }
        // If it does not see the key in the table then add 
        // the key to the table
        else {
            hash[checker] = true;
        }

        // Count the total characters so we know what to divide but
        charCount++
    }

    // If the character count is divisble by two and the length us equal to
    // zero then we found all of the keys had a match
    if(charCount % 2 === 0){
        return Object.keys(hash).length === 0;
    }

    // If it returns 1 that means there is a seperate key that does not have a 
    // match and cannot be a palindrome
    else{
        return Object.keys(hash).length === 1;
    }


    }

}