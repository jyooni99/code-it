const { fetchData } = require("./appClient");

describe("apiClient.js 테스트", () => {
  test("API 호출 후 데이터 포맷이 올바르게 되는지 확인", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "Leanne Graham",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
        },
      }),
    });
    const url = "https://jsonplaceholder.typicode.com/users/1";

    const result = await fetchData(url);

    expect(result).toEqual({
      userId: 1,
      formattedName: "LEANNE GRAHAM",
      address: "Kulas Light Apt. 556 Gwenborough",
    });
  });

  test("콜백함수가 제공될 경우, 해당 함수가 제대로 실행되는지 확인", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "test",
        address: {
          street: "test street",
          suite: "test suite",
          city: "test city",
        },
      }),
    });

    const url = "https://api.test.com/user/1";
    const callback = jest.fn();

    await fetchData(url, callback);

    expect(callback).toHaveBeenCalled(); // 실행되었는가?
  });

  test("콜백함수가 포맷된 데이터를 인자로 가지고 호출되는지 확인", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "test",
        address: {
          street: "test street",
          suite: "test suite",
          city: "test city",
        },
      }),
    });

    const url = "https://api.test.com/user/1";
    const callback = jest.fn();

    await fetchData(url, callback);

    expect(callback).toHaveBeenCalledWith({
      userId: 1,
      formattedName: "TEST",
      address: "test street test suite test city",
    });
  });

  test("콜백 함수가 한 번만 호출되는지 확인", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "test",
        address: {
          street: "test street",
          suite: "test suite",
          city: "test city",
        },
      }),
    });

    const url = "https://api.test.com/user/1";
    const callback = jest.fn();

    await fetchData(url, callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("콜백 함수가 제공되지 않았을 경우, 콜백함수가 호출되지 않는지 확인", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: "test",
        address: {
          street: "test street",
          suite: "test suite",
          city: "test city",
        },
      }),
    });

    const url = "https://api.test.com/user/1";
    const callback = jest.fn();

    await fetchData(url);

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
