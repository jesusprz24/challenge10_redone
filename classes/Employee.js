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

//getName is a function that does a single action it gets the name from the class
  //same for getID() and getEmail()

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

//getRole is a little different because the role of all class will be different
  //Employee, Manager, Engineer, and Intern

  getRole() {
    return "Employee";
  }

}
// the class must be exported to use it in other code files
// this is an older way of expoerting a class javascript has updated to a newer es6 style
module.exports = Employee;

