'use strict'
const fs = require('fs')
const path = require('path')

class Dictionary {
    constructor(filePath) {
        this.filePath = filePath || path.resolve(__dirname, './data/Viet74K.txt')

        let data = fs.readFileSync(this.filePath, 'utf-8')
        this.words = data.split('\n')
        this.lower_words = data.toLowerCase().split('\n')
        this.definitions = require('./data/dictionary.json')
    }

    has(word) {
        if (!word) return false
        return this.lower_words.indexOf(word.toLowerCase()) > -1
    }

    lookup(word) {
        return this.definitions[word]
    }
}

// exports default dictionary
module.exports = new Dictionary();

// exports for custom data
exports.Dictionary = Dictionary;