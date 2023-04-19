const Engineer = require('../classes/Engineer');

const name = "Han Solo";
const id = 28;
const email = "cooldude@email.com";
const github = "slayer@github";
const testEngineer= new Engineer(name, id, email, github);

test('Can set GitHUb account via constructor', () => {
	expect(typeof(testEngineer)).toBe("object");
});

test('getRole() should return "Engineer"', () => {
	const returnedRole = testEngineer.getRole();
	expect((returnedRole)).toBe("Engineer");
});

test('Can get GitHub username via getGithub()', () => {
	const returnedGithub = testEngineer.getGithub();
	expect((returnedGithub)).toBe(github);
});
