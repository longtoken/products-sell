import {
  request as _request,
  addInterceptor,
  // showToast,
} from "@tarojs/taro";
import { getAccessToken } from "@utils/tools";
import {Path} from "@utils/globalData";

export const apiUrl = Path.ORIGIN + Path.API;

enum ECode {
  UN_AUTHORIZED = '401', // 没有登录
  OPERATION_SUCCESS = '200', // "操作成功"
}

export interface IApiData<T> {
  data: T;
  code: ECode;
  msg: string;
}

type TOptions = Omit<_request.Option<any>, "url">;
const interceptor: Taro.interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { url } = requestParams;
  const isNeedSetToken = !(url && (url.includes("login") || url.includes("register")));
  const token = getAccessToken();
  if (isNeedSetToken && token) {
    requestParams.header = {
      ...requestParams.header,
      Authorization: `Bearer ${token}`
    };
  }
  return chain.proceed(requestParams).then(res => {
    return res;
  });
};
addInterceptor(interceptor);

function request<T>(url: string, options: TOptions): Promise<IApiData<T>> {
  return new Promise((resolve, reject) => {
    _request<IApiData<T>>({
      url: Path.ORIGIN + url,
      ...options
    }).then(data => {
      resolve(data.data);
    }).catch(error => {
      reject(error);
    })
  })
}

const httpService = {
  get<T, U>(url: string, data?: T) {
    return request<U>(url, { method: "GET", data });
  },
  post<T, U>(url: string, data: T) {
    return request<U>(url, { method: "POST", data });
  },
  put<T, U>(url: string, data: T) {
    return request<U>(url, { method: "PUT", data });
  },
  delete<T, U>(url: string, data: T) {
    return request<U>(url, { method: "DELETE", data });
  }
};

export default httpService;
