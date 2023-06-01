import { assert } from 'chai';
beforeEach(() => {
    console.info('before');
});

afterEach(() => {
    console.info('after');
});

describe('It should pass all tests', () => {
    describe('Dummy test 1.', () => {
        it('this better fucking work lol...', function () {
            assert.equal(1,1);
        });
    });
});

