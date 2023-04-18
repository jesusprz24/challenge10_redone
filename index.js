const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const getDataReadyForOutput = require('./createTeamHTML.js');

const teamMembers = [];

// First message of the app
//MUST CHANGE WELCOME MESSAGE
console.log(
  '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

function startTheApp() {

  function createManager() {
		//start createManager() asks inquirer questions and saves the answers to a teamMembers Array
		inquirer
			.prompt([
				{
					type: 'input',
					//CHANGE THIS NAME but remember to change it everywhere in the code
					//this name exactly matches the name we use in .then(answers)
					name: 'managerName',
					message: "What is the team manager's name?",
				},
				//Manager question 2 here
				//Manager question 3 here
				//Manager question 4 here

				//end of manager questions
				//inquirer uses Promises so we can chain inquirer methods (questions and answers) together (Promises allow developers to use .then())
			])
			.then((answers) => {
				//we are creating a new manager so all of the Manager Class items must be in the answers already
				//Yes we did ask all of these questions to the user above
				const manager = new Manager(
					//here are the answers to the manager questions
					answers.managerName,
					answers.managerId,
					answers.managerEmail,
					answers.managerOfficeNumber,
				);
				// the New Manager Class (A javascript object) is pushed to an empty teamMembers array
				teamMembers.push(manager);
				//after the manager is created we move on to a question/decision tree (see next function)
				askMoreTeamQuestions();
			});
		//end createManager() asks inquirer questions and saves the answers to a teamMembers Array
	}

  function askMoreTeamQuestions() {
    //asks the user to choose which team member to create Engineer, Intern, or None
		inquirer
			.prompt([
				{
					type: 'list',
					name: 'memberChoice',
					message: 'Which type of team member would you like to add?',
					choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
				},
			])
			.then((userChoice) => {
				// now we move to a switch statement that calls a function based upon the user choice
				switch (userChoice.memberChoice) {
					case 'Engineer':
						createEngineer();
						break;
					case 'Intern':
						createIntern();
						break;
					default:
            buildTeam();
            //not an Engineer or an Intern
            //The user has completed creating a team so start building the team
					//these three functions are below
				}
			});
	}

	function createEngineer() {
		//start inquirer questions for the second time with new questions and new answers
		inquirer
			.prompt([
				{
					type: 'input',
					//CHANGE THIS NAME but remember to change it everywhere in the code
					//this name exactly matches the name we use in .then(answers)
					name: 'engineerName',
					message: "What is your engineer's name?",
				},
				//Engineer question 2 here
				//Engineer question 3 here
				//Engineer question 4 here
				//end engineer questions
			])
			.then((answers) => {
				const engineer = new Engineer(
					//here are the answers to the engineer questions
					answers.engineerName,
					answers.engineerId,
					answers.engineerEmail,
					answers.engineerGithub,
				);
				// the New Engineer Class (A javascript object) is pushed to the teamMembers array
				teamMembers.push(engineer);
				//after the engineer is created and pushed we move back to on to the Engineer/Intern/None question/decision tree
				askMoreTeamQuestions(); //back to line 76
			});
	}

  function createIntern() {
		//start inquirer questions for the third time with new questions and new answers
		inquirer
			.prompt([
				{
					type: 'input',
					//CHANGE THIS NAME but remember to change it everywhere in the code
					//this name exactly matches the name we use in .then(answers)
					name: 'internName',
					message: "What is your intern's name?",
				},
				//Intern question 2 here
				//Intern question 3 here
				//Intern question 4 here

				//end Intern questions
			])
			.then((answers) => {
				//here are the answers to the intern questions
				const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
				// the New Intern Class (A javascript object) is pushed to the teamMembers array
				teamMembers.push(intern);
				//after the intern is created and pushed we move back to on to the Engineer/Intern/None question/decision tree
				askMoreTeamQuestions(); //back to line 76
			});
	}

	function buildTeam() {
    //there is a lot going on here in ths one line of code
    // there are many different code examplesonline that write a file to the file system. Most look similar.
    // first fs.writeFileSync will create or rewrite a file if it does or does not exist
    //then the first argument is the path on your file system to the "output directory"
    //Not sure if the app will work correctly without that directory Keep that directory
    // the outputPath variable also has the file name that will be used  for the output
    //then the getDataReadyForOutput function is called and passes in the teamMembers Array
    // the last option tells the writeFileSync to write the file in UTF-8 format.
		fs.writeFileSync(outputPath, getDataReadyForOutput(teamMembers), 'utf-8');
	}
	//after startTheApp() is called this is the first function call to start the process of asking the questions.
	//createManager() is run first because only one manager is needed and we get that process done because the app will get more complicated with Engineers and Interns
	createManager();
}
// this function call makes the app run
// without this call the app will not do anything
//this app uses a function pattern to run the code it needs it
// functions are the way developers control which code is run when we want it to run
startTheApp();
