import bvalue from "./bvalue";
import { users } from "../fixtures";

describe("bvalue", () => {
  it("pick age", () => {
    expect(bvalue("age")(users[0])).toBe(31);
  });

  it("pick name", () => {
    expect(bvalue("name")(users[0])).toBe("A");
  });
});
