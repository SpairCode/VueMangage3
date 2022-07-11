import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// 自定义头部 Token
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// 现在，在超时前，所有请求都会等待 3 秒
instance.defaults.timeout = 3000;

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    debugger;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    debugger;
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    debugger;
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
