import filter from "./filter";
import { users } from "../fixtures";

describe("filter", () => {
  it("user over 35", () => {
    expect(filter(users, (user) => user.age > 35)).toHaveLength(2);
  });

  it("user under 35", () => {
    expect(filter(users, (user) => user.age < 35)).toHaveLength(4);
  });

  it("predicate 두 번째인자 활용하기", () => {
    expect(filter([1, 2, 3, 4], (val, idx) => idx > 1)).toStrictEqual([3, 4]);
    expect(filter([1, 2, 3, 4], (val, idx) => idx % 2)).toStrictEqual([2, 4]);
  });
});
