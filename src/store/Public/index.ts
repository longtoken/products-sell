import { makeAutoObservable } from "mobx";
import fetch from '@service/Public'
import { RegisterReq } from "src/interface/Public/index.interface";
class GlobalStore {
  customerId = "";
  customerName = "Roc";
  token = "";

  constructor(){
    makeAutoObservable(this)
  }

  setCustomerName(val: string) {
    this.customerName = val;
  }

  async registerAction(params: RegisterReq) {
    const result = await fetch.registerAccount(params);
    console.log(result.data);
    return result.data;
  }
}
export default new GlobalStore();
