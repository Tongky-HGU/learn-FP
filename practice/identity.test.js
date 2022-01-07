import identity from "./identity";
import filter from "./filter";

describe("identity", () => {
  it("받은 인자를 그대로 내뱉는다.", () => {
    const a = 10;
    expect(identity(a)).toBe(10);
  });

  it("filter의 predicate로 사용한 경우, truthy value를 filter한다.", () => {
    const a = [true, 0, 10, "a", false, null];
    expect(filter(a, identity)).toStrictEqual([true, 10, "a"]);
  });
});
