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

console.log(
  '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

function startTheApp() {

  function createManager() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'name',
					message: "What is the team manager's name?",
				},
				{
					type: 'input',
					name: 'id',
					message: "What is the managers office numbers?",
				},
				{
					type: 'input',
					name: 'email',
					message: "What is the managers Email?",
				},
				{
					type: 'input',
					name: 'officeNumber',
					message: "What is the managers office number?",
				},
			])
			.then((answers) => {
				const manager = new Manager(
					answers.name,
					answers.id,
					answers.email,
					answers.officeNumber,
				);
				teamMembers.push(manager);
				askMoreTeamQuestions();
			});
	}

  function askMoreTeamQuestions() {
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
				switch (userChoice.memberChoice) {
					case 'Engineer':
						createEngineer();
						break;
					case 'Intern':
						createIntern();
						break;
					default:
            buildTeam();
				}
			});
	}

	function createEngineer() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'name',
					message: "What is your engineer's name?",
				},
				{
					type: 'input',
					name: 'id',
					message: "What is your engineer's name?",
				},
				{
					type: 'input',
					name: 'email',
					message: "What the email of your intern?",
				},
				{
					type: 'input',
					name: 'github',
					message: "What is your Engineer Github?",
				},
			])
			.then((answers) => {
				const engineer = new Engineer(
					answers.name,
					answers.id,
					answers.email,
					answers.github,
				);
				teamMembers.push(engineer);
				askMoreTeamQuestions();
			});
	}

  function createIntern() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'name',
					message: "What is your intern's name?",
				},
				{
					type: 'input',
					name: 'id',
					message: "What is your Intern id?",
				},
				{
					type: 'input',
					name: 'email',
					message: "What is your intern's email?",
				},
				{
					type: 'input',
					name: 'school',
					message: "What is your schools name?",
				},
			])
			.then((answers) => {
				const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
				teamMembers.push(intern);
				askMoreTeamQuestions();
			});
	}

	function buildTeam() {
    
		fs.writeFileSync(outputPath, getDataReadyForOutput(teamMembers), 'utf-8');
	}
	
	createManager();
}

startTheApp();
