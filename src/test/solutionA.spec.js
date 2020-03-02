var expect  = require('chai').expect;
var solve = require('../solutionA').solve;

describe('solutionA', () => {

  it('caseA', () => {
    const result = solve(10);
    expect(result).to.equal(20)
  });

  it('caseB', () => {
    const result = solve(20);
    expect(result).to.equal(40)
  });
});

