// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('addExclamationPoints should add 3 exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});

test('multiplyBySeven should multiply by seven', (expect) => {
    const expected = '28';

    const actual = multiplyBySeven('4');

    expect.equal(actual, expected);
});

test('multiplyBy12ThenHalve should multiply by twelve then halve', (expect) => {
    const expected = '24';

    const actual = multiplyBy12ThenHalve('4');

    expect.equal(actual, expected);
});

test('divideThenMultiply should divide the first number by the second then multiply ny the third', (expect) => {
    const expected = '10';

    const actual = divideThenMultiply('8', '4', '5');

    expect.equal(actual, expected);
});

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray('8', '4', '5');

    expect.deepEqual(actual, expected);
});
