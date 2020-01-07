import Taro, { Component } from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import './index.scss'

export default class NavigatorBlock extends Component {

  render () {
    return (
      <View className='navigatorWrapper'>
        {this.props.navigatorList.map((item, index) =>
          <View className='navigatorItem'>
            <Image className='img' src={item.imgUrl} />
            <Text className='desc'>{item.name}</Text>
          </View>
        )}
      </View>
    )
  }

}
