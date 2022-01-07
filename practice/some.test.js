import some from "./some";

describe("some", () => {
  it("하나라도 truthy 하다면 true를 반환한다.", () => {
    expect(some([0, null, 2])).toBe(true);
  });
  it("하나도 truthy 하지 않다면 false를 반환한다.", () => {
    expect(some([0, null, false])).toBe(false);
  });
});
