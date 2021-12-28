import map from "./map";
import { users } from "../fixtures";

describe("map", () => {
  it("get ages", () => {
    expect(map(users, (user) => user.age)).toStrictEqual([
      31, 32, 33, 34, 35, 36, 37,
    ]);
  });

  it("predicate 두 번째인자 활용하기", () => {
    expect(map([1, 2, 3, 4], (val, idx) => idx > 1)).toStrictEqual([
      false,
      false,
      true,
      true,
    ]);
    expect(map([1, 2, 3, 4], (val, idx) => idx % 2)).toStrictEqual([
      0, 1, 0, 1,
    ]);
  });
});
