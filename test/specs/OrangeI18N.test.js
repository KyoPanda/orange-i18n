import { expect } from 'chai';
import { bar, Window_Test } from 'index';

describe('bar', function () {
	it('it should return bar', function () {
		expect(bar()).to.be.equal('bar');
	});
});

describe('Window_Test', function () {
	it('should be a say hello', function () {
		const testWindow = new Window_Test();

		expect(testWindow.sayHello()).to.be.equal('Hello');
	});
});