test('2 + 2 is 4', () => {
    expect(2 + 2).toBe(4)
})

test('object assignment', () => {
    const data = {one: 1}
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
})

test('positive number is not zero', () => {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            expect(i + j).not.toBe(0);
        }
    }
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

test('numbers', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('floating point numbers', () => {
    const value = 0.1 + 0.2
    // expect(value).toBe(0.3)
    expect(value).toBeCloseTo(0.3)
})

test('string test1', () => {
    expect('team').not.toMatch(/I/)
})

test('string test2', () => {
    expect('Christoph').toMatch(/stop/)
})

const shoppingList = ['a', 'beer', 'c', 'd', 'e', 'a']
test('shopping list', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
})

function createError () {
    throw new Error('you make new error')
}

test('catch error', () => {
    expect(() => createError()).toThrow();
    expect(() => createError()).toThrow(Error)
    expect(() => createError()).toThrow('you make new error');
    expect(() => createError()).toThrow(/error/);
})