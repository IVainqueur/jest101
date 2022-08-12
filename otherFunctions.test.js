const otherFunctions = require('./otherFunctions')

/* 
The .toBe matcher does not work as expected on objects and arrays because it is strict 
and reference types (arrays and objects) also compare memory and shit 
so...........
the .toEqual matcher is usually used
*/



test('Similar Objects', () => {
    let expectedObj = {
        firstname: 'Vainqueur',
        lastname: 'ISHIMWE'
    }
    expect(otherFunctions.createUser('Vainqueur', 'ISHIMWE')).toEqual(expectedObj)
})



//Other possible matches include:
//.toBeUndefined
//.toBeDefined
//.toBeFalsy
//.toBeTruthy
//.not.toBe...
//.toBeNull
//.toBeLessThan
//.toMatch .... accepts regex
//.toContain


/* Asynchronous testing */
test('Leanne Graham is the user fetched', ()=>{
    expect.assertions(1)
    return otherFunctions.fetchUser().then(user => {
        
    })
})