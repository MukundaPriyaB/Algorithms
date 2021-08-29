//ES6
class Person {
  constructor() {
    this.name = "Max";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();

class Female extends Person {
  constructor() {
    super();
    this.gender = "Female";
    this.name = "Priya";
  }
  printMyGender() {
    console.log(this.gender);
  }
}

const female = new Female();
female.printMyGender();
female.printMyName();

/// Same in ES7
class Person {
  name = "Max";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();

class Female extends Person {
  gender = "Female";
  name = "Priya";
  printMyGender = () => {
    console.log(this.gender);
  };
}

const female = new Female();
female.printMyGender();
female.printMyName();
