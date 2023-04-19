const Employee = require("../classes/Employee");

const name = "Yoda";
const id = 66;
const email = "doOrDoNot@thereIsNoTry.com"
const testEmployee = new Employee(name, id, email);

test("Can instantiate Employee instance", () => {
  expect(typeof (testEmployee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  expect(testEmployee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  expect(testEmployee.id).toBe(id);

});

test("Can set email via constructor argument", () => {
  expect(testEmployee.email).toBe(email);
});

test("Can get name via getName()", () => {
  const returnedName = testEmployee.getName();
  expect(returnedName).toBe(name);
});

test("Can get id via getId()", () => {
  const returnedId = testEmployee.getId();
  expect(returnedId).toBe(id);
});

test("Can get email via getEmail()", () => {
  const returnedEmail = testEmployee.getEmail();
  expect(returnedEmail).toBe(email);
});

test("getRole() should return \"Employee\"", () => {
  const returnedRole = testEmployee.getRole();
  expect(returnedRole).toBe("Employee");
});

