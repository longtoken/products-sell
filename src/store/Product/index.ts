import { makeAutoObservable, runInAction } from "mobx";
import request from '@service/Home';

interface Details {
  id: number;
  name: string;
  desc: string;
  price: number;
  discountPrice: number;
  address: string;
  fare: number;
  img: string;
  countText: string;
  stock: number;
}
class ProductStore {
  constructor() {
    makeAutoObservable(this)
  }
  details: Details = {
    id: 1,
    name: '中国四大名菊黄山贡菊',
    desc: '产自安徽歙县，地理标志产品，汤色清澈亮洁，口感甜润回甘',
    price: 58,
    discountPrice: 89,
    address: '',
    fare: 0,
    img: 'https://img01.yit.com/media/e2bd0041-efa4-487b-8f15-6bb40730ff34.jpeg?imageMogr2/thumbnail/!518x518r/gravity/Center/crop/518x518',
    countText: '2盒 * 1',
    stock: 326,
  };

  async getProducts() {
    // let result: Details[] = [];
    // try {
    //   const response = await request.fetchProducts();
    //   if (response && response.data) {
    //     runInAction(() => {
    //       this.details = response.data;
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }

    // return result;
  }
}
export default new ProductStore();
