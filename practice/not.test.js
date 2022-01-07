import not from "./not";

describe("not", () => {
  it("!한 boolean을 반환한다.", () => {
    expect(not(false)).toBe(true);
    expect(not(0)).toBe(true);
    expect(not(1)).toBe(false);
    expect(not("a")).toBe(false);
    expect(not({})).toBe(false);
  });
});
