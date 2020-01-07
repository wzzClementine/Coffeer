import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import BottomBar from "./components/bottombar/bottomBar";
import GoodsItem from "./components/goodsitem/goodsItem";
import './index.scss'

export default class Cart extends Component {

  config: Config = {
    navigationBarTitleText: '购物车'
  };

  render () {
    return (
      <View className='cartWrapper'>
        <BottomBar />
        <GoodsItem />
      </View>
    )
  }

}
