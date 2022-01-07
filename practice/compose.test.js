import compose from "./compose";

describe("compose", () => {
  it("함수를 합성해 반환한다.", () => {
    const greet = (name) => "hi: " + name;
    const exclaim = (statement) => statement.toUpperCase() + "!";
    const welcome = compose(greet, exclaim);

    expect(welcome("moe")).toBe("hi: MOE!");
  });
});
