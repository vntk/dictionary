# dictionary

Vietnamese Dictionary for Node

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/@vntk/dictionary.svg?style=flat)](https://www.npmjs.com/package/@vntk/dictionary)
[![downloads](https://img.shields.io/npm/dm/@vntk/dictionary.svg)](https://www.npmjs.com/package/@vntk/dictionary)
[![Travis](https://travis-ci.org/vntk/dictionary.svg?branch=master)](https://travis-ci.org/vntk/dictionary)


# Installation

Using npm:

> npm install @vntk/dictionary --save

# API Usage

### Properties

* **words** - List of words in the dictionary
* **lower_words** - List of word in lower case
* **definitions** - List of word definitions

### Method: `.has(word:string)`

> Check a word is exists in dictionary

```js
const dictionary = require('@vntk/dictionary')

dictionary.has('chào')
// true
```

### Method: `.lookup(word:string)`

> Lookup word definitons

```js
const dictionary = require('@vntk/dictionary')

let senses = dictionary.lookup('chào')
console.log(senses)

// Output
[ { example: 'chào thầy giáo ~ con chào mẹ',
    sub_pos: 'Vt',
    definition: 'tỏ thái độ kính trọng hoặc quan tâm đối với ai bằng lời nói hay cử chỉ, khi gặp nhau hoặc khi từ biệt',
    pos: 'V' },
    { example: 'đứng nghiêm làm lễ chào cờ',
    sub_pos: 'Vu',
    definition: 'tỏ thái độ kính cẩn trước cái gì thiêng liêng, cao quý',
    pos: 'V' },
    { example: 'chào hàng ~ lời chào cao hơn mâm cỗ (tng)',
    sub_pos: 'Vu',
    definition: 'mời ăn uống hoặc mua hàng',
    pos: 'V' }]
```

# Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/vntk/dictionary/issues/new).
