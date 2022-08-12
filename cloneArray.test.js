const cloneArray = require('./cloneArray')

/* This won't work */
test('Proper Cloning', ()=>{
    const arr = [1, 2, 3]
    expect(cloneArray(arr)).toBe(arr)
})