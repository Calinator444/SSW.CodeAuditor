const expect = require("expect.js");
const HTMLHint = require("htmlhint").default;

const ruldId = "url-must-be-formatted-correctly";

const ruleOptions = {};

ruleOptions[ruldId] = true;

describe(`Rules: ${ruldId}`, () => {
  it("URL with full stop at the end should result in an error", () => {
    const code = '<a href="www.ssw.com.au/Thisisarule." />';
    const messages = HTMLHint.verify(code, ruleOptions);
    expect(messages.length).to.be(1);
  });

  it('URL with "/" at the end should result in an error', () => {
    const code = '<a href="www.ssw.com.au/Thisisarule/" />';
    const messages = HTMLHint.verify(code, ruleOptions);
    expect(messages.length).to.be(1);
  });

  it('URL with only "/" should not result in an error', () => {
    const code = '<a href="/" />';
    const messages = HTMLHint.verify(code, ruleOptions);
    expect(messages.length).to.be(0);
  });

  it("Correctly formatted URL with space should not result any error", () => {
    const code = '<a href="www.ssw.com.au/This is a rule" />';
    const messages = HTMLHint.verify(code, ruleOptions);
    expect(messages.length).to.be(0);
  });
});
