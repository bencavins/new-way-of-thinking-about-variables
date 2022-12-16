let a = [1, 2, 3]

/*
Under the hood, memory looks something like this:

[1, 2, 3] <- a
[]
[]
*/

let b = a
/*
We aren't copying anything here, we are making another reference
to the same block of memory.

[1, 2, 3] <- a, b
[]
[]
*/

a[0] = 99
console.log(`a=[${a}], b=[${b}]`)
/*
Arrays are mutable so when we are allowed to update the block
of memory that contains our array. Because b points to the 
same block, that change is applied to b as well.

[99, 2, 3] <- a, b
[]
[]

If we don't what this behavior, we need to manually copy the array
to a new memory block.
*/


b = [...a]  // spread operator makes a copy
/*
[99, 2, 3] <- a
[99, 2, 3] <- b
[]
*/


a[0] = 'abc'
console.log(`a=[${a}], b=[${b}]`)
/*
['abc', 2, 3] <- a
[99, 2, 3] <- b
[]
*/