
import httpService from "@utils/request";
import url from '@utils/api';

export const API_URL = {
  allProduct: `${url.api}/v1/getAllProduct`,
};

export interface Product {
  id: number;
  name: string;
  age: number;
  created_at: string;
  updated_at: string;
}

const fetchProducts = () => httpService.get<Record<string, unknown>, Product[]>(API_URL.allProduct);

export default {
  fetchProducts
};
