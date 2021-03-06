# Orange I18N
[![Build Status](https://travis-ci.org/KyoPanda/orange-i18n.svg?branch=master)](https://travis-ci.org/KyoPanda/orange-i18n)
[![Maintainability](https://api.codeclimate.com/v1/badges/3fdb98b128b2c457cb94/maintainability)](https://codeclimate.com/github/KyoPanda/orange-i18n/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3fdb98b128b2c457cb94/test_coverage)](https://codeclimate.com/github/KyoPanda/orange-i18n/test_coverage)
[![Greenkeeper badge](https://badges.greenkeeper.io/KyoPanda/orange-i18n.svg)](https://greenkeeper.io/)
[![dependencies Status](https://img.shields.io/david/KyoPanda/orange-i18n)](https://david-dm.org/KyoPanda/orange-i18n/master)
[![devDependencies Status](https://img.shields.io/david/dev/KyoPanda/orange-i18n)](https://david-dm.org/KyoPanda/orange-i18n/master?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/KyoPanda/orange-i18n)](https://github.com/KyoPanda/orange-i18n/issues)
[![License: MIT](https://img.shields.io/github/license/KyoPanda/orange-i18n)](https://opensource.org/licenses/MIT)

A Fantasy Farming: Orange Season's mod to allow the translation of the game to other languages.

## API Reference

## Classes

<dl>
<dt><a href="#GettextFormatter">GettextFormatter</a></dt>
<dd><p>Class used to encode and decode gettext data.</p>
</dd>
<dt><a href="#JsonFormatter">JsonFormatter</a></dt>
<dd><p>Class used to encode and decode JSON data.</p>
</dd>
</dl>

<a name="GettextFormatter"></a>

## GettextFormatter
Class used to encode and decode gettext data.

**Kind**: global class  

* [GettextFormatter](#GettextFormatter)
    * [.ext](#GettextFormatter.ext)
    * [.encode(data)](#GettextFormatter.encode) ⇒ <code>string</code>
    * [.decode(data)](#GettextFormatter.decode) ⇒ <code>Object.&lt;string, string&gt;</code>

<a name="GettextFormatter.ext"></a>

### GettextFormatter.ext
**Kind**: static property of [<code>GettextFormatter</code>](#GettextFormatter)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ext | <code>Object</code> |  | List of extensions used by the formatter file types. |
| ext.source | <code>string</code> | <code>&quot;pot&quot;</code> | The file extension of the template data. |
| ext.main | <code>string</code> | <code>&quot;po&quot;</code> | The file extension of the translations data. |

<a name="GettextFormatter.encode"></a>

### GettextFormatter.encode(data) ⇒ <code>string</code>
Encode the translation data to the gettext format.

**Kind**: static method of [<code>GettextFormatter</code>](#GettextFormatter)  
**Returns**: <code>string</code> - The gettext formatted data.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object.&lt;string, string&gt;</code> | A list with source and target for each translation as     key and value. |

<a name="GettextFormatter.decode"></a>

### GettextFormatter.decode(data) ⇒ <code>Object.&lt;string, string&gt;</code>
Decode the translation data in the gettext format.

**Kind**: static method of [<code>GettextFormatter</code>](#GettextFormatter)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - An object with source and target translations as key and
    value.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | The gettext encoded translation data. |

<a name="JsonFormatter"></a>

## JsonFormatter
Class used to encode and decode JSON data.

**Kind**: global class  

* [JsonFormatter](#JsonFormatter)
    * [.ext](#JsonFormatter.ext)
    * [.encode(data)](#JsonFormatter.encode) ⇒ <code>string</code>
    * [.decode(data)](#JsonFormatter.decode) ⇒ <code>Object.&lt;string, string&gt;</code>

<a name="JsonFormatter.ext"></a>

### JsonFormatter.ext
**Kind**: static property of [<code>JsonFormatter</code>](#JsonFormatter)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ext | <code>Object</code> |  | List of extensions used by the formatter file types. |
| ext.source | <code>string</code> | <code>&quot;json&quot;</code> | The file extension of the template data. |
| ext.main | <code>string</code> | <code>&quot;json&quot;</code> | The file extension of the translations data. |

<a name="JsonFormatter.encode"></a>

### JsonFormatter.encode(data) ⇒ <code>string</code>
Encode the translation data to the JSON format.

**Kind**: static method of [<code>JsonFormatter</code>](#JsonFormatter)  
**Returns**: <code>string</code> - The JSON formatted data.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object.&lt;string, string&gt;</code> | A list with source and target for each translation as     key and value. |

<a name="JsonFormatter.decode"></a>

### JsonFormatter.decode(data) ⇒ <code>Object.&lt;string, string&gt;</code>
Decode the translation data in the JSON format.

**Kind**: static method of [<code>JsonFormatter</code>](#JsonFormatter)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - An object with source and target translations as key and
    value.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | The JSON encoded translation data. |

