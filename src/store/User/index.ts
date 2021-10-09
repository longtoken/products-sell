import { makeAutoObservable } from "mobx";
import fetch from '@service/Public'
import { saveAccessToken } from "@utils/tools";
import { IApiData } from "@utils/request";
import { LoginReq, RegisterReq } from "src/interface/Public/index.interface";
class UserStore {
  token = "token change";

  constructor() {
    makeAutoObservable(this)
  }

  setCustomerName(val: string) {
    this.token = val;
  }

  async registerAction(params: RegisterReq) {
    let result = false;
    try {
      const response = await fetch.registerAccount(params);
      result = response.data;
    } catch (e) {
      console.log(e);
    }

    return result;
  }
  async loginAction(params: LoginReq) {
    let result = {} as IApiData<string>;
    try {
      const response = await fetch.loginAccount(params);
      if (response && response.code === '200') {
        result = response;
        saveAccessToken(response.data);
      }
    } catch (e) {
      console.log(e);
    }
    return result;
  }
}
export default new UserStore();
