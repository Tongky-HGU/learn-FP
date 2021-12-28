import find from "./find";
import { users } from "../fixtures";

describe("find", () => {
  it("find user's name is not A", () => {
    expect(find(users, (user) => user.name.indexOf("A"))).toStrictEqual({
      age: 32,
      id: 2,
      name: "B",
    });
  });

  it("find user's name is C and age is 33", () => {
    expect(
      find(users, (user) => user.name === "C" && user.age === 33)
    ).toStrictEqual({
      age: 33,
      id: 3,
      name: "C",
    });
  });

  it("predicate 두 번째인자 활용하기", () => {
    expect(find([1, 2, 3, 4], (val, idx) => idx > 1)).toBe(3);
    expect(find([1, 2, 3, 4], (val, idx) => idx % 2)).toBe(2);
  });
});
