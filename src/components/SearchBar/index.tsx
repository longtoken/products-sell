import { View, Text, Input, Button, BaseEventOrig, Image } from "@tarojs/components";
import { useCallback, useState } from "react";
import { useLocalObservable, Observer } from 'mobx-react';
// import userStore from '@store/User';
import './index.scss'

const SearchBar = props => {
  const [inputValue, setInputValue] = useState('');
  // const [isIconShow, setIsIconShow] = useState(false);
  const onSearchInput = () => { }
  const onSearchFocus = () => { }
  const onSearchBlur = () => { }
  // const onClearInput = () => { }
  const handleSearchCancel = () => { }

  return <Observer>
    {() => (
      <View className="searchBar">
        <View className="searchContain">
          <Image className="searchIcon" src="https://sr.aihuishou.com/bd/kuaishou/search/product-search.png" mode="widthFix" />
          <View className="searchTxt">
            <Input className="searchText-input" type="text" placeholder="搜索你想找的机型" confirm-type="search" onInput={onSearchInput} onFocus={onSearchFocus} onBlur={onSearchBlur} value={inputValue} />
            {/* {!isIconShow && <Text className="crossIcon" onClick={onClearInput}></Text>} */}
          </View>
          { props.showCancel && <Text className="cancelSearch" onClick={handleSearchCancel}>取消</Text>}
        </View>
      </View>
    )}
  </Observer>
};



export default SearchBar;
