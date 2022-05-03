// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints, multiplyBySeven } from '../functions.js';

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

