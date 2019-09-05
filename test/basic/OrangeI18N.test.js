import { expect } from 'chai';
import bar from '../../src/bar';

describe('bar', function () {
	it('it should return bar', function () {
		expect(bar()).to.be.equal('bar');
	});
});