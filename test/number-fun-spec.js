const { expect }= require("chai");
const {returnsThree, reciprocal } = require("../problems/number-fun");
//const { describe } = require("mocha"); <-- not needed but visual studio keeps putting it in

describe("Must return the number 3", () => {
    context("1 test checking if the return is 3", () => {
        it("returns 3", () => {
            expect(returnsThree()).to.equal(3);

        })
    })
})

describe("reciprocal function", () => {
    context("valid arguments", () => {
        it("should return the reciprocal of input number", () => {
            let numberTen = reciprocal(10);

            expect(numberTen).to.equal("0.10"); // same here btw

            let numberFortyFour = reciprocal(44);

            expect(numberFortyFour).to.equal("0.02") // here i use equal "0.02" since the toFixed() in my function makes the output a string
        })
    })

    context("invalid arguments", () => {
        it ("should be a number", () => {
            expect(() => {
                reciprocal("hey")
            }).to.throw(TypeError, "input is not a number");
        })

        it ("should have an argument between 1 and 1000000", () => {
            expect(() => {
                reciprocal(0.1)
            }).to.throw(TypeError, "number must be between 1 and 1000000");
        })
    })
})
