import { View, Text } from "@tarojs/components";
import userStore from '@store/User';
import { useLocalObservable, Observer } from 'mobx-react';
import Register from './components/Register';
import Login from './components/Login';

import "./index.scss";
import { reLaunch } from "@tarojs/taro";
export interface EventDetail {
  value: string;
}

const Index = () => {
  const localUserStore = useLocalObservable(() => userStore);

  return <Observer>
    {() => (
      <View className="index">
        <View>
          <Text onClick={() => {
            reLaunch({ url: '/pages/home/home' });
          }}>{localUserStore.token}-call</Text>
        </View>
        <Register />
        <Login />
      </View>
    )}
  </Observer>
};

export default Index;
