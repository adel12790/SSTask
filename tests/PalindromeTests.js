const assert = require('assert');
const Palindrome = require('../src/Palindrome');

describe('Palindrome Test cases:', () => {

    describe('String: favor', () => {
        it('Should check for non palindrome strings and return false', () => {
            assert.equal(Palindrome('favor').validate().isValid, false);
        });
    });

    describe('String: race car', () => {
        it('Should check for palindrome strings return true', () => {
            assert.equal(Palindrome('race car').validate().isValid, true);
        });
    });

    describe('String: 12321', () => {
        it('Should accept numbers and return true', () => {
            assert.equal(Palindrome('12321').validate().isValid, true);
        });
    });
});