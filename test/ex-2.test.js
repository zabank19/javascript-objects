import fs from "fs/promises";

describe("test JS Object Hack Hour", () => {
  test("ex-2: reassign values in product", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return product.ratings`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(4.5);
  });
});
