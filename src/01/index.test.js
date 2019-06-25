const { assert } = require("chai");

const statement = require(".");
const [invoice] = require("./invoices");
const plays = require("./plays");

const expectedText = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

module.exports = {
  text: () => {
    const text = statement(invoice, plays);
    assert.equal(text, expectedText);
  }
};
