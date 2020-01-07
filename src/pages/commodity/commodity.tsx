import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import BottomBar from "./components/bottomBar/bottomBar";
import Goods from "./components/goods/goods";
import './index.scss'

export default class Commodity extends Component {

  config: Config = {
    navigationBarTitleText: '咖啡商城'
  };

  render () {
    return (
      <View className='cartWrapper'>
        <Goods />
        <BottomBar />
      </View>
    )
  }

}
