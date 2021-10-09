import { View, Text, Input, Button, BaseEventOrig, Image, Swiper, SwiperItem } from "@tarojs/components";
import { useCallback, useEffect, useState } from "react";
import { useLocalObservable, Observer } from 'mobx-react';
// import userStore from '@store/User';
import './index.scss'

interface BannerList {
  id: number;
  img: string;
}

const Swipe = props => {
  const [bannerList, setBannerList] = useState<BannerList[]>([]);
  // const [isIconShow, setIsIconShow] = useState(false);
  const onSearchInput = () => { }
  const onSearchFocus = () => { }
  const onSearchBlur = () => { }
  // const onClearInput = () => { }
  const handleSearchCancel = () => { }

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('-----fu')
  //     setBannerList([
  //       {
  //         id: 1,
  //         img: 'https://img01.yit.com/CMSRESQN/48062fb3094edb10f981ef0a5fc5723f_702X320.jpeg?imageMogr2/thumbnail/750x'
  //       },
  //       {
  //         id: 2,
  //         img: 'https://img01.yit.com/CMSRESQN/4425861e75d0f18726a39df127192363_702X320.jpeg?imageMogr2/thumbnail/750x'
  //       },
  //     ]);
  //   }, 1000);
  // }, []) 
  console.log('-----render -----')
  return <Observer>
    {() => (
      <>
        <View className="swipeWrap">
          <Image className="img" src="https://img01.yit.com/CMSRESQN/4425861e75d0f18726a39df127192363_702X320.jpeg?imageMogr2/thumbnail/750x" mode="widthFix" />
          {/* <Swiper
            className='swiper-own'
            // indicatorColor='#999'
            // indicatorActiveColor='#333'
            circular
            indicatorDots={false}
            autoplay={false}
          >
            {
              bannerList.map((item) => {
                return (
                  <SwiperItem key={item.id}>
                    <Image className="img" src={item.img} mode="widthFix" />
                  </SwiperItem>
                )
              })
            }
          </Swiper> */}
        </View>
      </>
    )}
  </Observer>
};



export default Swipe;
