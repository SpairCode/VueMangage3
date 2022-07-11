import request from "../utils/request";

const common = {
  querySelect(params) {
    debugger;
    return request("querySelect", {
      params: params,
      type: "get",
    });
  },
};

export default common;
