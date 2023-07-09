class Person {
  constructor(name, age) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    } else if (typeof age !== "number") {
      throw new TypeError("age must be a number");
    }
    this.name = name;
    this.age = age;
  }

  static greetAll(array) {
    let newArray = [];
    array.forEach((el) => {
      let sayHelloCalled = el.sayHello();
      newArray.push(sayHelloCalled);
    });
    return newArray;
  }

  sayHello() {
    return `Hello there ${this.name}!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("not an object");
    }
    else if (typeof obj.age === "undefined" && typeof obj.name == "string") {
      throw new TypeError("you need to add an age");
    }
    else if (typeof obj.name === "undefined" && typeof obj.age == "number") {
      throw new TypeError("you need to add a name");
    }
    else if (typeof obj.age !== "number") {
      throw new TypeError("age is NaN");
    } else if (typeof obj.name !== "string") {
      throw new TypeError("name must be a string");
    }


    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }
}
person = new Person("joe", 42);
        person2 = new Person("emily", 31);
        person3 = new Person("mickey", 2);
console.log(Person.greetAll([person, person2, person3]));


module.exports = Person;
