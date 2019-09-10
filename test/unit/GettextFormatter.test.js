import { expect } from 'chai';
import GettextFormatter from 'formatters/GettextFormatter';

describe('GettextFormatter', function () {
	describe('#ext', function () {
		it('should be have the default values for source and main', function () {
			const ext = GettextFormatter.ext;

			expect(ext).to.be.an('object');
			expect(ext.source).to.be.equal('pot');
			expect(ext.main).to.be.equal('po');
		});
	});

	describe('#encode()', function () {
		it('should properly encode an object to the gettext format', function () {
			const data = GettextFormatter.encode({
				'Hello, world!': 'Olá, mundo!',
				'Escape "': 'Escapar "',
			});

			expect(data).to.be.an.string;
			expect(data).to.have.string('msgid ""');
			expect(data).to.have.string('msgstr ""');
			expect(data).to.have.string('msgid "Hello, world!"');
			expect(data).to.have.string('msgstr "Olá, mundo!"');
			expect(data).to.have.string('msgid "Escape \\""');
			expect(data).to.have.string('msgstr "Escapar \\""');
		});
	});

	describe('#decode()', function () {
		it('should properly decode and gettext string to an object', function () {
			const data = GettextFormatter.decode([
				'msgid ""',
				'msgstr ""',
				'',
				'msgid "Hello, world!"',
				'msgstr "Olá, mundo!"',
				'',
				'msgid "Escape \\""',
				'msgstr "Escapar \\""',
			].join('\n'));

			expect(data).to.be.an('object');
			expect(data).to.have.property('', '');
			expect(data).to.have.property('Hello, world!', 'Olá, mundo!');
			expect(data).to.have.property('Escape "', 'Escapar "');
		});
	});
});