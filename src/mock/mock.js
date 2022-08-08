import Mock from "mockjs";

export default [
  {
    url: "/api/name",
    type: "get",
    response: () => {
      return {
        code: 0,
        message: "ok",
        data: Mock.mock({
          "list|10": [
            {
              "id|+1": 1,
            },
          ],
        }),
      };
    },
  },
];
