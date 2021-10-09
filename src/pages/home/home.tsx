import { View, Text } from "@tarojs/components";
import homeStore from '@store/Home';
import { navigateTo } from "@tarojs/taro";
import { useEffect } from "react";
import { useLocalObservable, Observer } from 'mobx-react';

import "./home.scss";
import SearchBar from "@components/SearchBar";
import HomeSwiper from './components/HomeSwiper';
import HotSell from './components/HotSell';

const Index = () => {
  const localHomeStore = useLocalObservable(() => homeStore);
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
  return <Observer>
    {
      () =>
        <View className="index">
          <SearchBar />
          <HomeSwiper />
          <HotSell />
          {
            localHomeStore.allProduct.map(item => (
              <View key={item.id}>
                <Text>{item.name}</Text>
              </View>)
            )
          }
          {/* <View>
            <Text onClick={toHome}>go to home</Text>
          </View>
          <View>
            <Text onClick={checkList}>check list</Text>
          </View> */}
        </View>
    }
  </Observer>
};

export default Index;
