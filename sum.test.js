const sum = require('./sum')

test('Adding Properly', ()=>{
    expect(sum(1, 4)).toBe(5)
})