import every from "./every";

describe("every", () => {
  it("두 truthy 일 때 true를 반환한다.", () => {
    expect(every([{}, true, 2])).toBe(true);
  });

  it("하나라도 falsy일 때 false를 반환한다.", () => {
    expect(every([{}, true, null])).toBe(false);
    expect(every([0, null, 2])).toBe(false);
  });
});
