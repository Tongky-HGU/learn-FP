import bmatch from "./bmatch";
import find from "./find";
import { users } from "../fixtures";

describe("bmatch", () => {
  it("match name is B", () => {
    expect(bmatch("name", "B")(users[0])).toBe(false);
    expect(bmatch("name", "B")(users[1])).toBe(true);
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

  it("match two argument", () => {
    expect(bmatch({ name: "B", age: 32 })(users[0])).toBe(false);
    expect(bmatch({ name: "B", age: 32 })(users[1])).toBe(true);
  });
});
