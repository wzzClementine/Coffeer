import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './index.scss'

export default class Header extends Component {

  navigateToCoffee () {
    Taro.navigateTo({
      url: '/pages/coffee/coffee'
    })
  }

  render () {
    return (
      <View className='headerWrapper'>
        <View className='infoWrapper'>
          <View className='personInfo'>
            <Image className='ava' src='../../../../assets/images/ava.jpg' />
            <View className='desc'>
              <Text className='name'>用户名</Text>
              <Text className='info'>粉丝11 | 关注 11 | 原创咖啡 11 | 被收藏 11</Text>
            </View>
          </View>
          <Image className='mail' src='../../../../assets/images/u457.svg'/>
        </View>
        <View className='shareBtn' onClick={this.navigateToCoffee}>
          <Image className='img' src='../../../../assets/images/u482.svg' />
          <Text>分享我创作的咖啡</Text>
        </View>
      </View>
    )
  }

}
