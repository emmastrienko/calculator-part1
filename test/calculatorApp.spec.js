const chai = require("chai");
const expect = chai.expect;
const { addition, subtraction } = require("../src/calculatorApp");

describe("Addition Functionality", () => {
  it("Check for addition of two positive numbers and return the sum as positive number", () => {
    const actual = addition(2, 2);
    expect(actual).to.equal(4);
  });

  it("Check for addition of two negative numbers and return the sum as negative number.", () => {
    const actual = addition(-4, -5);
    expect(actual).to.equal(-9);
  });

  it("Check if either of number is negative produce subtracted output.", () => {
    const actual = addition(7, -2);
    expect(actual).to.equal(5);
  });
});

describe("Subtraction Functionality", () => {
  it("Check for subtracting two positive number and return positive subtraction", () => {
    const actual = subtraction(9, 3);
    expect(actual).to.equal(6);
  });
  it("Check if either of number is negative produce sum as output", () => {
    const actual = subtraction(3, -5);
    expect(actual).to.equal(8);
  });
  it("Subtracting zero will produce zero as subtraction.", () => {
    const actual = subtraction(0, 0);
    expect(actual).to.equal(0);
  });
});
