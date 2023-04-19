const Manager = require("../classes/Manager");

const name = "Darth Maul";
const id = 36;
const email = "imissmylegs@email.com";
const officeNumber = "122A"
const testManager = new Manager(name, id, email, officeNumber);


test("Can set office number via constructor argument", () => {
	expect(typeof(testManager)).toBe("object");
});

test("getRole() should return \"Manager\"", () => {
	const returnedRole = testManager.getRole();
	expect((returnedRole)).toBe("Manager");
});

test("Can get office number via getOffice()", () => {
	const returnedofficeNumber = testManager.getOfficeNumber();
	expect((returnedofficeNumber)).toBe(officeNumber);
});
