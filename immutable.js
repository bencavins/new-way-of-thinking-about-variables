let x = 10

/*
Under the hood, memory looks something like this:

[10] <- x
[]
[]
*/


let y = x
/*
This doesn't copy anything, all it does is make a new refernce
to the same block of memory.

[10] <- x, y
[]
[]
*/


x = 99
/*
Numbers are *immutable* in Javascript so we can't change the 
existing block of memory. We need to to allocate a new block
and make x point to that block.

[10] <- y
[99] <- x
[]
*/
console.log(`x=${x}, y=${y}`)

//----------------------------------------------------------

let s = 'hello'

/*
Strings are also immutable so they work the same way. Sometimes
we *think* we are changing the string but we are actually
creating new strings.

["hello"] <- s
[]
[]
*/


s = s.toUpperCase()

/*
From out perspective it looks like we are changing the string s,
but really we are building a new uppercase version of the string.

["hello"]
["HELLO"] <- s
[]

If you are curious what happens to the old memory block, Javascript
uses something called "garbage collection" to periodically clean
these up.
*/