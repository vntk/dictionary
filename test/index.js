'use strict'
var test = require("tape"),
    dictionary = require("../index");

test("searching common case", function (t) {
    t.plan(2)

    t.ok(dictionary.has('chào'), 'a common word exists')
    t.notOk(dictionary.has('không có từ này'), 'does not exists complex word')
});

test('lookup definition', (t) => {
    t.plan(3)

    let senses = dictionary.lookup('đi')
    let sen1 = senses[0]

    t.equal(senses.length, 22, 'a word has multiple senses')
    t.equal(sen1['pos'], 'V', 'is verb')
    t.ok(sen1['definition'], 'has a definition')
})