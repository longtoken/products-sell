import { makeAutoObservable, runInAction } from "mobx";
import request from '@service/Home';
import { Product } from "src/interface/Home/index.interface";

class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }
  allProduct: Product[] = [];

  async getProducts() {
    let result: Product[] = [];
    try {
      const response = await request.fetchProducts();
      if (response && response.data) {
        runInAction(() => {
          this.allProduct = response.data;
        });
      }
    } catch (e) {
      console.log(e);
    }

    return result;
  }
}
export default new HomeStore();
