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
					name: 'Darth Vader',
					message: "What is the team manager's name?",
				},
				{
					type: 'input',
					id: '1',
					message: "What is the managers office numbers?",
				},
				{
					type: 'input',
					email: 'realfather@email.com',
					message: "What is the managers Email?",
				},
				{
					type: 'input',
					officeNumber: '120',
					message: "What is the managers office number?",
				},
			])
			.then((answers) => {
				const manager = new Manager(
					answers.managerName,
					answers.managerId,
					answers.managerEmail,
					answers.managerOfficeNumber,
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
					name: 'Han Solo',
					message: "What is your engineer's name?",
				},
				{
					type: 'input',
					id: '2',
					message: "What is your engineer's name?",
				},
				{
					type: 'input',
					email: 'coolguy@email.com',
					message: "What the email of your intern?",
				},
				{
					type: 'input',
					github: 'coolguy@github',
					message: "What is your Engineer Github?",
				},
			])
			.then((answers) => {
				const engineer = new Engineer(
					answers.engineerName,
					answers.engineerId,
					answers.engineerEmail,
					answers.engineerGithub,
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
					name: 'Yoda',
					message: "What is your intern's name?",
				},
				{
					type: 'input',
					id: '3',
					message: "What is your Intern id?",
				},
				{
					type: 'input',
					email: 'yoda@gmail.com',
					message: "What is your intern's email?",
				},
				{
					type: 'input',
					school: 'undergrad',
					message: "What is your schools name?",
				},
			])
			.then((answers) => {
				const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
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
