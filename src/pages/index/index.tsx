import { View, Text } from "@tarojs/components";
import userStore from '@store/User';
import { useLocalStore, useObserver } from 'mobx-react';
import Register from './Components/register';
import Login from './Components/login';

import "./index.scss";
export interface EventDetail {
  value: string;
}

const Index = () => {
  const localUserStore = useLocalStore(() => userStore);

  return useObserver(() => (
    <View className="index">
      <View>
        <Text>{localUserStore.token}-call</Text>
      </View>
      <Register />
      <Login />
    </View>
  ));
};

export default Index;
