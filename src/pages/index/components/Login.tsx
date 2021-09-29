import { View, Text, Input, Button, BaseEventOrig } from "@tarojs/components";
import { useCallback, useState } from "react";
import { useLocalStore, useObserver } from 'mobx-react';
import userStore from '@store/User';
import { navigateTo } from "@tarojs/taro";
import { EventDetail } from "..";

const Experiment = props => {
  const localUserStore = useLocalStore(() => userStore);
  // const { GlobalStore } = useStore();

  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const submitForm = useCallback(async () => {
    console.log('--form--', usernameText, passwordText)
    try {
      const result = await localUserStore.loginAction({
        username: usernameText,
        password: passwordText,
      });
      console.log(result, '---login success---')
      if (result.code === '200') {
        navigateTo({
          url: '/pages/home/home'
        });
      }
    } catch (e) {
      console.log(e, 'catch=======');
    }
  }, [usernameText, passwordText]);

  const onUsernameInput = (e: BaseEventOrig<EventDetail>) => {
    // console.log(e);
    setUsernameText(e.detail.value);
  };
  const onPasswordInput = (e: BaseEventOrig<EventDetail>) => {
    // console.log(e);
    setPasswordText(e.detail.value);
  };
  return useObserver(() => (
    <View className="passport-register">
      <View className="username">
        <Text>用户名：</Text>
        <Input type="text" className="input" value={usernameText} onInput={onUsernameInput} />
      </View>
      <View className="password">
        <Text>密码：</Text>
        <Input type="text" className="input" value={passwordText} onInput={onPasswordInput} />
      </View>
      <View className="submit">
        <Button type="primary" onClick={submitForm}>登录</Button>
      </View>
    </View>
  ));
};


export default Experiment;
