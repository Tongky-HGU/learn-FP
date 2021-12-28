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
});
