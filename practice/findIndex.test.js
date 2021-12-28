import bmatch from "./bmatch";
import findIndex from "./findIndex";
import { users } from "../fixtures";

describe("findIndex", () => {
  it("find Index using with bmatch", () => {
    expect(findIndex(users, bmatch({ name: "B", age: 32 }))).toBe(1);
  });

  it("return zero when nothing match", () => {
    expect(findIndex(users, bmatch({ name: "A", age: 32 }))).toBe(-1);
  });

  it("predicate 두 번째인자 활용하기", () => {
    expect(findIndex([1, 2, 3, 4], (val, idx) => idx > 1)).toBe(2);
    expect(findIndex([1, 2, 3, 4], (val, idx) => idx % 2)).toBe(1);
  });
});
