const { expect } = require("chai");
const Person = require("../problems/person")
const { describe } = require("mocha");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

describe("constructor", () => {
    it("must set the name and age proberties of an instances of the Person Class", () => {
        let person = new Person("joe", 23);

        // check if its and instance, and if the instance has the name and age proberty
        expect(person).to.be.instanceOf(Person);
        expect(person).to.have.property("name");
        expect(person).to.have.property("age");
    })

    it("name must be a string", () => {
        expect(() => {
            let person = new Person(49, 58);
        }).to.throw(TypeError, "name must be a string");

    })

    it("age must be a number", () => {
        expect(() => {
            let person = new Person("joe", "sami");
        }).to.throw(TypeError, "age must be a number");

    })
})

describe("instances methods", () => {
    let person;
    let person2;
    let person3;

    beforeEach(() => {
        person = new Person("joe", 42);
        person2 = new Person("emily", 31);
        person3 = new Person("mickey", 2);
    })
    context("various instance methods", () => {

        it("must return the instances of a persons name and a greeting message", () => {
            expect(person.sayHello()).to.equal("Hello there joe!");
        })

        it("must return a string that the person visited the passed in person instance", () => {

            expect(person.visit(person2)).to.equal("joe visited emily");
        })

        it("must switch the visit functions so the other persons visit - this means the current instances is the argument", () => {
            const spyVisit = chai.spy.on(person2, "visit");
            const result = person.switchVisit(person2);

            expect(spyVisit).to.have.been.called.once;
            expect(result).to.equal("emily visited joe");


        })

        context("update: valid object", () => {
            it("should update the info", () => {
                person.update({name: "kasper", age: 29});

                expect(person.name).to.equal("kasper");
                expect(person.age).to.equal(29);
            })
        })
        context("update: invalid object", () => {
            it("age must be a number", () => {
                expect(() => {
                    person.update({name: "mickey", age: "johan"});
                }).to.throw(TypeError, "age is NaN");
            })

            it("name must be a string", () => {
                expect(() => {
                    person.update({name: 53, age: 42});
                }).to.throw(TypeError, "name must be a string");
            })
            it("should be an object", () => {
                expect(() => {
                    person.update("kasper", 29);
                }).to.throw(TypeError, "not an object");
            })
            it("should tell the user to add an age", () => {
                expect(() => {
                    person.update({name: "kasper"});
                }).to.throw(TypeError, "you need to add an age");
            })
            it("should tell the user to add a name", () => {
                expect(() => {
                    person.update({age: 42});
                }).to.throw(TypeError, "you need to add a name");
            })
            context("Tryupdate is succesful", () => {
                it("should return true if update was successful", () => {
                    let result = person.tryUpdate({name: "philip", age: 50});
                    expect(person.name).to.equal("philip");
                    expect(person.age).to.equal(50);
                    expect(() => {
                        person.tryUpdate({name: "philip", age: 50});
                    }).to.not.throw(TypeError);
                    expect(result).to.equal(true);
                })
            })
            context("Tryupdate was not succesful", () => {
                it("should not throw an error, should isntead return false", () => {
                    let result = person.tryUpdate({name: "mugi", age: "suki"});
                    expect(result).to.be.false;
                    expect(() => {
                        person.tryUpdate({name: "mugi", age: "suki"});
                    }).to.not.throw(TypeError);
                })
            })
            it("take an array of person instances. greetall will call the sayHello() on each person instances and store each returned string in an array and finally return an array of the stored string", () => {
                let spySayHello = chai.spy.on(person, "sayHello");
                let spySayHello2 = chai.spy.on(person2, "sayHello");
                let spySayHello3 = chai.spy.on(person3, "sayHello");
                let result = Person.greetAll([person, person2, person3]);


               expect(spySayHello).to.have.been.called.once;
               expect(spySayHello2).to.have.been.called.once;
               expect(spySayHello3).to.have.been.called.once;

                expect(result).to.deep.equal(["Hello there joe!", "Hello there emily!", "Hello there mickey!"])
            })
        })
    })
})
