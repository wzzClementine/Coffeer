import Taro, { Component } from '@tarojs/taro'
import {Image, Input, Radio, Swiper, SwiperItem, Text, View} from '@tarojs/components'
import './index.scss'


export default class Comment extends Component {

  render () {
    return (
      <View className='commentWrapper'>
        <View className='titleWrapper'>
          <Text>商品评论(24)</Text>
          <Text>好评度100% ></Text>
        </View>
        <View className='userInfoWrapper'>
          <View className='userInfo'>
            <View className='user'>
              <Image className='ava' src='../../../../assets/images/ava.jpeg' />
              <Text>用户名</Text>
            </View>
            <View className='starWrapper'>
              <Image className='img' src='../../../../assets/images/u478.svg' />
              <Image className='img' src='../../../../assets/images/u478.svg' />
              <Image className='img' src='../../../../assets/images/u478.svg' />
              <Image className='img' src='../../../../assets/images/u478.svg' />
              <Image className='img' src='../../../../assets/images/u478.svg' />
            </View>
          </View>
          <Text className='content'>是正品，超级划算呢！</Text>
        </View>
        <View className='getMoreBtn'><Text>查看更多评论</Text></View>
      </View>
    )
  }

}
