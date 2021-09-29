import httpService, { IApiData } from "@utils/request";
import url from '@utils/api';

export interface IMODApiData extends IApiData<boolean> { }

export const API_URL = {
  mallCartSum: "/v1/mall/cart/mallCartSum",
  register: `${url.api}/v1/user/register`,
  login: `${url.api}/v1/user/login`,
};

export interface RegisterReq {
  username: string;
  password: string;
}
export interface LoginReq {
  username: string;
  password: string;
}


const mallCartSum = () => httpService.get(API_URL.mallCartSum);
const registerAccount = (data: RegisterReq) => httpService.post<RegisterReq, boolean>(API_URL.register, data);
const loginAccount = (data: LoginReq) => httpService.post<LoginReq, string>(API_URL.login, data);

export default {
  mallCartSum,
  registerAccount,
  loginAccount,
};
