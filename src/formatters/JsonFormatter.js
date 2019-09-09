/**
 * @class JsonFormatter
 * @classdesc Class used to encode and decode JSON data.
 * @hideconstructor
 */
export default {

	/**
	 * @memberof JsonFormatter
	 * @property {Object} ext List of extensions used by the formatter file types.
	 * @property {string} ext.source=json The file extension of the template data.
	 * @property {string} ext.main=json The file extension of the translations data.
	 */
	ext: {
		source: 'json',
		main: 'json',
	},

	/**
	 * Encode the translation data to the JSON format.
	 *
	 * @memberof JsonFormatter
	 * @param {Object.<string, string>} data A list with source and target for each translation as key and value.
	 *
	 * @returns {string} The JSON formatted data.
	 */
	encode: data => JSON.stringify(data, null, 4),

	/**
	 * Decode the translation data in the JSON format.
	 *
	 * @memberof JsonFormatter
	 * @param {string} data The JSON encoded translation data.
	 *
	 * @returns {Object.<string, string>} An object with source and target translations as key and value.
	 */
	decode: data => JSON.parse(data),
};