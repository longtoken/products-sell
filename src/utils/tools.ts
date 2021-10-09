import Taro from "@tarojs/taro";
import { globalData } from "./globalData";

export function saveAccessToken(token: string) {
  globalData.accessToken = token;
  Taro.setStorage({
    key: 'access_token',
    data: token,
  });
}

export function getAccessToken() {
  if (globalData.accessToken) {
    return globalData.accessToken;
  } else {
    try {
      const value: string = Taro.getStorageSync('access_token');
      if (value) {
        return value;
      }
    } catch (e) {
      return '';
    }
  }
}
