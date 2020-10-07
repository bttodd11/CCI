// O(1)
// This is constant time, the time does not changes not matter the size of the input.
// function o1(params, x ,y) {
//     return params;
// }

// O(log N)
// This is used when you are using a binary search tree or a balanced search tree.


// O(N log N)




// O(N)
// This grows accoring to the input/input size that is passed in the parameter.
// function oN(largeArray) {
//     for(let index = 0; index < largeArray.length; index++){
//         console.log(largeArray[index])
//     }
// }




// O(N2)
// This could be when the array is returning pairs of something of their is more than one loop. 
// Could also be a double loop

// function oN2(largeArray, largerArray) {
//     for(let index = 0; index < largeArray.length; index++){
//         for(let secondIndex = 0; secondIndex < largerArray.length; secondIndex++){
//             console.log(largeArray[index], largerArray[secondIndex])
//         }
//     }
// }



// O(2n)
// This is a recursive calculation where the growth doubles with the addition to the data set.
// Basically when it returns function and it is the input is passed to that function.

// function o2N(largeArray) {
//     for(let index = 0; index < largeArray.length; index++){
//         nextFunctionPassed(largeArray[index])
//     }    
// }



// O(A + B)
// You want to add the runtimes when it is " Do A and then do B".

// function addAB(a, b) {
//     console.log(a)
//     console.log(b)
// }



// O(A * B)
// You want to multiply the runtimes when it is " Do B for each element of A".
// If it is two different inputs/ arrays it might be this 

// function aTimesB(a, b) {
//     //     for(let index = 0; index < a.length; index++){
// //         for(let secondIndex = 0; secondIndex < b.length; secondIndex++){
// //             console.log(a[index] * b[secondIndex])
// //         }
// //     }
// }