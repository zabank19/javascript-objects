import fs from "fs/promises";

describe("exercise-1 : test JS Object Hack Hour", () => {
  test("Key และ Value ของ Object ต้องได้ผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return foodOrder`;

    const func = new Function(code);
    const result = func();

    expect(result.orderNumber).toEqual("A0234");
    expect(result.address).toEqual("Bangkok");
    expect(result.restaurantName).toEqual("MK");
    expect(result.totalPrice).toEqual(5000);
    expect(result.paymentType).toEqual("Credit Card");
  });
});
