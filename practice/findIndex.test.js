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
});
