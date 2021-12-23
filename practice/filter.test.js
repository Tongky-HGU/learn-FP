import filter from "./filter";
import { users } from "../fixtures";

describe("filter", () => {
  it("user over 35", () => {
    expect(filter(users, (user) => user.age > 35)).toHaveLength(2);
  });

  it("user under 35", () => {
    expect(filter(users, (user) => user.age < 35)).toHaveLength(4);
  });
});
