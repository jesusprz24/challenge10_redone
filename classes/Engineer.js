const Employee = require("./Employee");
//Must require Employee to connet it and use (use = extend = inherit) all of the parent variables and methods
class Engineer extends Employee {
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
