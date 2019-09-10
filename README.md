# Orange I18N

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

