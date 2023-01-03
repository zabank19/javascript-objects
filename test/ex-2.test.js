import fs from "fs/promises";

describe("exercise-2 : test JS Object Hack Hour", () => {
  test("Key และ Value ของ Object ต้องได้ผลลัพธ์ที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return product`;

    const func = new Function(code);
    const result = func();

    expect(result.ratings).toEqual(undefined);
    expect(result.photo).toEqual("https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg");
    expect(result.code).toEqual("IT0101010");
    expect(result.price).toEqual(6000);
    expect(result.facebookShare).toEqual(45.5);
  });
});
