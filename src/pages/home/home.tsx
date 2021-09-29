import { View, Text } from "@tarojs/components";
import homeStore from '@store/Home';
import { navigateTo } from "@tarojs/taro";
import { useEffect } from "react";
import { useLocalStore, useObserver } from 'mobx-react';

import "./home.scss";

const Index = () => {
  const localHomeStore = useLocalStore(() => homeStore);
  const toHome = () => {
    navigateTo({
      url: '/pages/index/index'
    });
  };
  useEffect(() => {
    console.log('---did mount')
  }, []);
  const checkList = () => {
    console.log('----get products----')
    localHomeStore.getProducts();
  }
  return useObserver(() => (
    <View className="index">
      {
        localHomeStore.allProduct.map(item => (
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>)
        )
      }
      <View>
        <Text onClick={toHome}>go to home</Text>
      </View>
      <View>
        <Text onClick={checkList}>check list</Text>
      </View>
    </View>
  ));
};

export default Index;
