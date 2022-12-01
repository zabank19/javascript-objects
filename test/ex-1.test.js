import fs from "fs/promises";

describe("test JS Object Hack Hour", () => {
  test("ex-1: can create an object", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return foodOrder.totalPrice`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(5000);
  });
});
