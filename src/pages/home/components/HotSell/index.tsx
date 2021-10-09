import { View, Text, Input, Button, BaseEventOrig, Image, ScrollView } from "@tarojs/components";
import { useCallback, useEffect, useState } from "react";
import { useLocalObservable, Observer } from 'mobx-react';
// import userStore from '@store/User';
import './index.scss'
import { navigateTo } from "@tarojs/taro";
interface HotProduct {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: string;
  discountPrice: string;
}
const HotSell = props => {
  const [hotList, setHotList] = useState<HotProduct[]>([]);
  // const [isIconShow, setIsIconShow] = useState(false);

  useEffect(() => {
    setHotList([
      {
        id: 1,
        img: 'https://img01.yit.com/media/c71ef445-773c-4fe5-a88c-69bd20da7fae.jpeg?imageMogr2/thumbnail/!518x518r/gravity/Center/crop/518x518',
        title: '10种营养食材做的红颜糕',
        desc: '10种营养食材做的红颜糕，美味可口',
        price: '50',
        discountPrice: '60',
      },
      {
        id: 2,
        img: 'https://img01.yit.com/media/1b56159f-e1ed-4b1d-a317-df8ffbd868a0.jpeg?imageMogr2/thumbnail/!518x518r/gravity/Center/crop/518x518',
        title: '2015年老寿眉禅茶佛礼',
        desc: '20年以上老树，两大佛教寺院恭制，2018年佛诞珍藏版禅茶6年老寿眉。',
        price: '258',
        discountPrice: '370',
      },
      {
        id: 3,
        img: 'https://img01.yit.com/media/e2bd0041-efa4-487b-8f15-6bb40730ff34.jpeg?imageMogr2/thumbnail/!518x518r/gravity/Center/crop/518x518',
        title: '中国四大名菊黄山贡菊',
        desc: '产自安徽歙县，地理标志产品，汤色清澈亮洁，口感甜润回甘',
        price: '58',
        discountPrice: '89',
      },
      {
        id: 4,
        img: 'https://img01.yit.com/media/f203f643-87d8-4cec-9444-16787be4abce.jpeg?imageMogr2/thumbnail/!518x518r/gravity/Center/crop/518x518',
        title: '新奇好物:重力星球音箱 陨石黑',
        desc: '新奇好物：像手办一样精致的音箱，未来感十足，音质很棒，4款可选',
        price: '1152',
        discountPrice: '2098',
      },
    ])
  }, []);

  const productItemClick = () => {
    navigateTo({
      url: '/pages/product/index'
    });
  }

  return <Observer>
    {() => (
      <View className="hotSell main">
        <View className="hotSell-title">
          <Text className="hotSell-title-text">热销商品</Text>
        </View>
        <View className="scrollContent">
          <ScrollView
            className='scrollView'
            scrollY
            scrollWithAnimation
            // scrollTop={scrollTop}
            // style={scrollStyle}
            // lowerThreshold={Threshold}
            // upperThreshold={Threshold}
            // onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            // onScroll={this.onScroll}
          >
            {
              hotList.map((item) => {
                return (
                  <View className="scroll-wrap" key={item.id} onClick={productItemClick}>
                    <View className="scroll-wrap-picture">
                      <Image className="scroll-wrap-img" src={item.img} mode="widthFix" />
                    </View>
                    <View className="scroll-wrap-content">
                      <View className="scroll-wrap-content-name">
                        <Text className="scroll-wrap-content-text">{item.title}</Text>
                      </View>
                      <View className="scroll-wrap-content-desc">
                        <Text className="scroll-wrap-content-desc-text">{item.desc}</Text>
                      </View>
                      <View className="scroll-wrap-content-money">
                        <View className="scroll-wrap-content-money-price"><Text className="currency-red">￥</Text><Text className="text-red">{item.price}</Text></View>
                        <View className="scroll-wrap-content-money-discountPrice">
                          <Text className="line-through">
                            <Text className="currency">￥</Text><Text className="text">{item.discountPrice}</Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>

      </View>
    )}
  </Observer>
};



export default HotSell;
