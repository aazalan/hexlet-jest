import reverse from '../src/index.js';
import _ from 'lodash';

test('reverse', () => {
    expect(reverse('Hello')).toEqual('olleH');
    expect(reverse('')).toEqual('');
});

const collection = ['one', true, 3, 4, 'cat', {},''];

test('includes', () => {
    expect(_.includes(collection,3)).toBe(true);
    expect(_.includes(collection, 11)).toBe(false);
});

test('filter', () => {
    expect(_.filter(collection,(v) => v % 2 === 0)).toEqual([4, '']);
});

let now;

beforeEach(() => {
    now = Date.now();
})