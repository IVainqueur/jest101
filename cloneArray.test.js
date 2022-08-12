const cloneArray = require('./cloneArray')


test('Proper Cloning', ()=>{
    const arr = [1, 2, 3]
    expect(cloneArray(arr)).toBe(arr)
})