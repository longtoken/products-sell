
import { HomeApi } from "@utils/apiPath";
import httpService from "@utils/request";
import { Product } from "src/interface/Home/index.interface";

const fetchProducts = () => httpService.get<Record<string, unknown>, Product[]>(HomeApi.allProduct);

export default {
  fetchProducts
};
