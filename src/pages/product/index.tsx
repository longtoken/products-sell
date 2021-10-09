import { View, Text, Image } from "@tarojs/components";
import productStore from '@store/Product';
import { navigateTo } from "@tarojs/taro";
import { useLocalObservable, Observer } from 'mobx-react';

import "./index.scss";

const Product = () => {
  const localProductStore = useLocalObservable(() => productStore);

  const onConfirm = () => {
    navigateTo({
      url: '/pages/cart/cart',
    });
  };

  return <Observer>
    {
      () =>
        <View className="product">
          <View className="swipe">
            <Image className="img" src={localProductStore.details.img} />
          </View>
          <View className="content">
            <View className="money">
              <View className="price"><Text className="currency">￥</Text><Text className="text">{localProductStore.details.price}</Text></View>
              <View className="discountPrice"><Text className="currency">￥</Text><Text className="text">{localProductStore.details.discountPrice}</Text></View>
            </View>

            <View className="title">
              <Text className="name">{localProductStore.details.name}</Text>
            </View>
            <View className="desc">
              <Text className="name">{localProductStore.details.desc}</Text>
            </View>
            <View className="count">
              <View className="col fare">
                <Text className="text">快递：{localProductStore.details.fare}</Text>
              </View>
              <View className="col stock">
                <Text className="text">库存：{localProductStore.details.stock}</Text>
              </View>
            </View>

            <View className="selection">
              <View className="col">
                <View className="property">
                  <Text className="name">规格</Text>
                </View>
                <View className="actions">
                  <Text className="value">已选：{localProductStore.details.countText}</Text>
                  <Text className="icon"></Text>
                </View>
              </View>
              <View className="col">
                <View className="property">
                  <Text className="name">地址</Text>
                </View>
                <View className="actions">
                  <Text className="value">请选择收货地址</Text>
                  <Text className="icon"></Text>
                </View>
              </View>
            </View>
          </View>

          <View className="operation">
            <View className="home">
              <Text className="icon"></Text>
              <Text className="name">商城首页</Text>
            </View>
            <View className="collect">
              <Text className="icon"></Text>
              <Text className="name">收藏</Text>
            </View>
            <View className="cart">
              <Text className="icon"></Text>
              <Text className="name">加入购物车</Text>
            </View>
            <View className="confirm" onClick={onConfirm}>
              <Text className="text">立即购买</Text>
            </View>
          </View>
        </View>
    }
  </Observer>
};

export default Product;
