import { Path } from "./globalData";

export const HomeApi = {
  allProduct: `${Path.API}/v1/getAllProduct`,
};

export const PublicApi = {
  register: `${Path.API}/v1/user/register`,
  login: `${Path.API}/v1/user/login`,
};
