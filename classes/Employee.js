class Employee {

    //Employee is the parent class which all other classes will inherit from
  //setup all the basic items all employees will have
  //Classes contain variables and methods to be used whereever a class is used in the code
  //constructor is a function that creates three variables
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

}

module.exports = Employee;

