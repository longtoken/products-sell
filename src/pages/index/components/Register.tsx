import { View, Text, Input, Button, BaseEventOrig } from "@tarojs/components";
import { useCallback, useState } from "react";
import { useLocalStore, useObserver } from 'mobx-react';
import userStore from '@store/User';
import { EventDetail } from "..";

const Experiment = props => {
  const localUserStore = useLocalStore(() => userStore);
  // const { GlobalStore } = useStore();

  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const submitForm = useCallback(async () => {
    console.log('--form--', usernameText, passwordText)
    try {
      localUserStore.registerAction({
        username: usernameText,
        password: passwordText,
      })
      // const result = await httpService.post<RegisterReq, boolean>(API_URL.register, {
      //   username: usernameText,
      //   password: passwordText,
      // });
      // console.log(result);
      // Taro.showToast({
      //   title: result.data ? '注册成功' : '注册失败',
      //   icon: result.data ? 'success' : 'none'
      // });
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
        <Button type="primary" onClick={submitForm}>注册</Button>
      </View>
    </View>
  ));
};



export default Experiment;
