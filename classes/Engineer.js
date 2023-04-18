const Employee = require("./Employee");
//Must require Employee to connet it and use (use = extend = inherit) all of the parent variables and methods
class Engineer extends Employee {

	//constructor creates the class
	//parameters are the all the items the class will use in other parts of the code
	//super calls the parent Employee and inherits those items (variables ot methods)
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getRole() {
	  return "Engineer";
	}

	getGithub() {
	  return this.github;
	}

}

module.exports = Engineer;
