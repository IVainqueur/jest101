const otherFunctions = require('./otherFunctions')

/* 
The .toBe matcher does not work as expected on objects and arrays because it is strict 
and reference types (arrays and objects) also compare memory and shit 
so...........
the .toEqual matcher is usually used
*/
const beginningTesting = () => console.log("============ TESTING IS STARTING ==============")
const endingTesting = () => console.log("============ DONE ==============")
const startingTest = () => console.log('Starting test...')
const endingTest = () => console.log('Ending test!')

beforeEach(startingTest)
afterEach(startingTest)

beforeAll(beginningTesting)
afterAll(endingTesting)

const specificTestFunctions = () => console.log("Specifically testing this function....")

describe()


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
test('Leanne Graham is the user fetched', () => {
    // expect.assertions(1)
    return otherFunctions.fetchUser()
        .then(user => {
            expect(user.name).toBe('Leanne Graham')
        })
})