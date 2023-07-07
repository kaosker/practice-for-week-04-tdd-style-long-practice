const { expect } = require("chai");
const myMap = require("../problems/my-map");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
// const { Context } = require("mocha"); <-- not needed but visual studio keeps putting it in
// const { describe } = require("mocha"); <-- not needed but visual studio keeps putting it in

describe("myMap function", () => {
    context("valid tests", () => {
        let myArray;
        let myCallBack = (el) => el * 5;

        beforeEach(() => {
            myArray = [1,5,10];
        });

        it("return a new array with the given callback on each element in the original array", () => {
            expect(myMap(myArray, myCallBack)).to.deep.equal([5, 25, 50]);
            expect(myArray).to.deep.equal([1, 5, 10]);
        })

        it("ensure the callback is invoked once for each element", () => {
            const callBackSpy = chai.spy(myCallBack);

            myMap(myArray, callBackSpy);
            expect(callBackSpy).to.have.been.called.exactly(myArray.length);

        })

        it("should not use the built in Array.map", () => {
            const mapSpy = chai.spy.on(Array.prototype, "map");
            myMap(myArray, myCallBack);
            expect(mapSpy).not.to.have.been.called;

        })
    })
})
