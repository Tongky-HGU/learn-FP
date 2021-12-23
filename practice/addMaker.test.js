import addMaker from "./addMaker";

describe("addMaker", () => {
  it("1+2=3", () => {
    expect(addMaker(1)(2)).toBe(3);
  });

  it("make add5", () => {
    const add5 = addMaker(5);
    expect(add5(1)).toBe(6);
  });

  it("make add3", () => {
    const add3 = addMaker(3);
    expect(add3(1)).toBe(4);
  });
});
