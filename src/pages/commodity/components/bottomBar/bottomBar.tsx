import Taro, { Component } from '@tarojs/taro'
import {Image, Radio, Text, View} from '@tarojs/components'
import './index.scss'


export default class BottomBar extends Component {

  render () {
    return (
      <View className='bottomWrapper'>
        <View className='leftWrapper'>
          <View className='buttonWrapper'>
            <Image className='img' src='../../../../assets/images/u496.svg' />
            <Text>首页</Text>
          </View>
          <View className='buttonWrapper'>
            <Image className='img' src='../../../../assets/images/u494.svg' />
            <Text>购物车</Text>
          </View>
          <View className='buttonWrapper'>
            <Image className='img' src='../../../../assets/images/u495.svg' />
            <Text>客服</Text>
          </View>
        </View>
        <View className='rightWrapper'>
          <Text className='leftBtn'>加入购物车</Text>
          <Text className='rightBtn'>立即购买</Text>
        </View>
      </View>
    )
  }

}
