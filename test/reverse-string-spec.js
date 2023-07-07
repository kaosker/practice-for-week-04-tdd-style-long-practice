const { expect } = require("chai");
const reverseString = require("../problems/reverse-string");
// const { Context } = require("mocha"); <-- not needed but visual studio keeps putting it in

describe("Should be a function the reverse strings", function() {
    context("2 simple tests", () => {
        it ("should reverse the input", function() {
            let string1 = reverseString("hejsa");

            expect(string1).to.equal("asjeh");
        })

        it ("should throw a TypeError when not a string", function() {
            expect(() => {
                reverseString(5);
            }).to.throw(TypeError, "not a string kasper");


        })
    })



})
