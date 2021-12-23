import map from "./map";
import { users } from "../fixtures";

describe("map", () => {
  it("get ages", () => {
    expect(map(users, (user) => user.age)).toStrictEqual([
      31, 32, 33, 34, 35, 36, 37,
    ]);
  });
});
