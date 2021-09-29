import { PublicApi } from "@utils/apiPath";
import httpService from "@utils/request";
import { LoginReq, RegisterReq } from "src/interface/Public/index.interface";

const registerAccount = (data: RegisterReq) => httpService.post<RegisterReq, boolean>(PublicApi.register, data);
const loginAccount = (data: LoginReq) => httpService.post<LoginReq, string>(PublicApi.login, data);

export default {
  registerAccount,
  loginAccount,
};
