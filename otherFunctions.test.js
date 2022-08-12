const otherFunctions = require('./otherFunctions')

/* 
The .toBe matcher does not work as expected on objects and arrays because it is strict 
and reference types (arrays and objects) also compare memory and shit 
so...........
the .toEqual matcher is usually used
*/

test('')