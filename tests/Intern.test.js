const Intern = require('../classes/Intern');

const name = "Luke";
const id = 55;
const email = "usetheforce@email.com"
const school = "Yoda Academy"
const testIntern = new Intern (name, id, email, school);

test('Can set school via constructor', () => {
	expect(typeof(testIntern)).toBe("object");
});

test('getRole() should return "Intern"', () => {
	const returnedRole = testIntern.getRole();
	expect((returnedRole)).toBe("Intern");
});

test('Can get school via getSchool()', () => {
	const returnedSchool = testIntern.getSchool();
	expect((returnedSchool)).toBe(school);
});


