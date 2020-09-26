# Harlaw

Transform DSL (Lingvo Dictionary File) files to JSON. Formatting options available for custom output.

There are many dictionaries available as .dsl, but very few in easily consumable formats. Harlaw formats the dsl files to json with decent search/replace/remove options.

### Install

`yarn add harlaw`

### Usage


With default settings:

```javascript
const { toJson } = require('harlaw');

const input = `${__dirname}/dsl/myDictionary.dsl`
const output = `${__dirname}/json/myResult.json`

await toJson(input, output);

```
By default, Harlaw performs HTML transform to Lingvo markup. For example, `[b]` becomes `<strong/>` and `[i]` becomes `<i>`.

You can also pass on settings array to remove all extra markup:

```javascript
const { toJson, noMarkupSettings } = require('harlaw');

const input = `${__dirname}/dsl/myDictionary.dsl`
const output = `${__dirname}/json/myResult.json`

await toJson(input, output, noMarkupSettings)

```

For custom formatting needs, you can also pass on completely custom settings object:

```javascript
const { toJson } = require('harlaw');

const input = `${__dirname}/dsl/myDictionary.dsl`
const output = `${__dirname}/json/myResult.json`

const mySettings = {
  replaces: [ // Any key & value pair you with replaced.
    { search: '[b]', replace: '<strong>' },
    { search: '[/b]', replace: '</strong>' },
    { search: '[i]', replace: '<i>' },
    { search: '[/i]', replace: '</i>' },
    { search: '[p]', replace: '<span>' },
    { search: '[/p]', replace: '</span>' },
    { search: '{-}', replace: '-' },
    { search: '[ref]', replace: '<span class="reference">' },
    { search: '[/ref]', replace: '</span>' },
  ],
  removes: [ // Any elements to be replaced with ''
    '\\', '[/m]', '[m1]', '[m2]', '[m3]', '[m4]', '[m5]', '[m6]', '[m7]', '[m8]', '[m9]', '[m10]', '\t', '[c gray]', '[/c]',
  ],
}

await toJson(input, output, mySettings)

```

If you don't want physical json file, but would rather just do something with data, use `toArray`

```javascript
const { toArray } = require('harlaw');

const input = `${__dirname}/dsl/myDictionary.dsl`

const mySettings = {
	//optional
}

const dictionary = await toArray(input, mySettings)

console.log(dictionary)

```

You can use custom read options by passing readOptions object to settings. It will be passed to [createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options).


```javascript
const { toJson, toArray } = require('harlaw');

const input = `${__dirname}/dsl/myDictionary.dsl`
const output = `${__dirname}/json/myResult.json`

const mySettings = {
  replaces: { /* optional */ },
  removes: { /* optional */ },
  readSettings: {
    encoding: 'utf16le',
    // any other valid option.
  },
}

// Works with JSON.
await toJson(input, output, mySettings)

// ...And with array.
const dictionary = await toArray(input, mySettings)

console.log(dictionary)

```


#### What's in the name?

In G.R.R Martins "A Song Of Ice And Fire", there is a character named Rodrik Harlaw. He is mockingly called "The Reader". That is what my Harlaw does too; reads things no one else cares about.
