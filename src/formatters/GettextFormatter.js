/**
 * Regular expression used to parse gettext translations.
 *
 * @private
 * @type {RegExp}
 */
const GETTEXT_REGEXP = new RegExp([
  'msgid "((?:[^"]|\\\\")*)"',
  'msgstr "((?:[^"]|\\\\")*)"(?:\n|$)',
].join('\\n'), 'gi');

/**
 * Regular expression used to remove quote slash escape from gettext keys and values.
 *
 * @private
 * @type {RegExp}
 */
const QUOTE_SLASH_ESCAPE_REGEX = /\\"/g;

/**
 * @class GettextFormatter
 * @classdesc Class used to encode and decode gettext data.
 * @hideconstructor
 */
export default {

  /**
   * @memberof GettextFormatter
   * @property {Object} ext List of extensions used by the formatter file types.
   * @property {string} ext.source=pot The file extension of the template data.
   * @property {string} ext.main=po The file extension of the translations data.
   */
  ext: {
    source: 'pot',
    main: 'po',
  },

  /**
   * Encode the translation data to the gettext format.
   *
   * @memberof GettextFormatter
   * @param {Object.<string, string>} data A list with source and target for each translation as
   *     key and value.
   *
   * @returns {string} The gettext formatted data.
   */
  encode: (data) => {
    let text = [
      'msgid ""',
      'msgstr ""',
      '"MIME-Version: 1.0\\n"',
      '"Content-Type: text/plain; charset=UTF-8\\n"',
      '"Content-Transfer-Encoding: 8bit\\n"',
      '',
      '',
    ].join('\n');

    Object.keys(data).forEach((key) => {
      text += [
        `msgid ${JSON.stringify(key)}`,
        `msgstr ${JSON.stringify(data[key])}`,
        '',
      ].join('\n');
    });

    return text;
  },

  /**
   * Decode the translation data in the gettext format.
   *
   * @memberof GettextFormatter
   * @param {string} data The gettext encoded translation data.
   *
   * @returns {Object.<string, string>} An object with source and target translations as key and
   *     value.
   */
  decode: (data) => {
    const result = {};

    GETTEXT_REGEXP.lastIndex = 0;

    let match;

    for (;;) {
      match = GETTEXT_REGEXP.exec(data);

      if (match === null) {
        break;
      }

      const [key, value] = match.slice(1).map((str) => str.replace(QUOTE_SLASH_ESCAPE_REGEX, '"'));

      result[key] = value;
    }

    return result;
  },
};
