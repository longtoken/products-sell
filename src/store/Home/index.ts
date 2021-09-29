import { makeAutoObservable, runInAction } from "mobx";
import request, { Product } from '@service/Home';

class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }
  allProduct: Product[] = [];

  async getProducts() {
    let result: Product[] = [];
    try {
      const response = await request.fetchProducts();
      console.log(response, '---response');
      if (response && response.data) {
        runInAction(() => {
          console.log('---write')
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
