import Taro, { Component } from '@tarojs/taro'
import {Image, Radio, Text, View} from '@tarojs/components'
import './index.scss'


export default class BottomBar extends Component {

  render () {
    return (
      <View className='bottomWrapper'>
        <View className='leftWrapper'>
          <View className='allPickWrapper'>
            <Radio className='radio' value="单选框" />
            <Text>全选</Text>
          </View>
          <Text style={"color: #E06430;"}>删除</Text>
        </View>
        <View className='rightWrapper'>
          <View className="priceWrapper">
            <View className="price">
              <Text className='label'>合计: </Text>
              <Text style={"color: #DD5D00;"}>￥172</Text>
            </View>
            <View className="price">
              <Text className='label'>邮费: </Text>
              <Text className='label'>已包邮</Text>
            </View>
          </View>
          <View className='settle'>
            <Text>结算(3)</Text>
          </View>
        </View>
      </View>
    )
  }

}
