import { expect } from 'chai';
import JsonFormatter from 'formatters/JsonFormatter';

describe('JsonFormatter', function () {
	describe('#ext', function () {
		it('should be have the default values for source and main', function () {
			const ext = JsonFormatter.ext;

			expect(ext).to.be.an('object');
			expect(ext.source).to.be.equal('json');
			expect(ext.main).to.be.equal('json');
		});
	});

	describe('#encode()', function () {
		it('should properly encode an object to the JSON format', function () {
			const data = JsonFormatter.encode({
				'Hello, world!': 'Olá, mundo!',
				'Escape "': 'Escapar "',
			});

			expect(data).to.be.an.string;
			expect(data).to.have.string('"Hello, world!"');
			expect(data).to.have.string('"Olá, mundo!"');
			expect(data).to.have.string('"Escape \\""');
			expect(data).to.have.string('"Escapar \\""');
		});
	});

	describe('#decode()', function () {
		it('should properly decode and JSON string to an object', function () {
			const data = JsonFormatter.decode('{"Hello, world!":"Olá, mundo!","Escape \\"":"Escapar \\""}');

			expect(data).to.be.an('object');
			expect(data).to.have.property('Hello, world!', 'Olá, mundo!');
			expect(data).to.have.property('Escape "', 'Escapar "');
		});
	});
});