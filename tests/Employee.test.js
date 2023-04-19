//must remove code comments before you submit as told to you by the TA Walter Perry for UTA-VIRT-FSF-PT-10-2022-U-LOLC
//must change test string or you will be flagged for plagiarism by the graders.
// all tests are written in the same code pattern
//use the two provided examples to base your code for all the tests

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
//add code here
});

test("Can set email via constructor argument", () => {
	//add code here
});

test("Can get name via getName()", () => {
	//add code here
});

test("Can get id via getId()", () => {
	//add code here
});

test("Can get email via getEmail()", () => {
	//add code here
});

test("getRole() should return \"Employee\"", () => {
	//add code here
});

