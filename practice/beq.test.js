import beq from "./beq";

describe("beq", () => {
  it("두 값을 ===로 비교한다.", () => {
    expect(beq(1)(1)).toBe(true);
    expect(beq(0)(1)).toBe(false);
    expect(beq({})({})).toBe(false);
  });
});
