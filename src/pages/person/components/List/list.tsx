import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './index.scss'

export default class PersonList extends Component {

  render () {
    return (
      <View className='ListWrapper'>
        <View className='specialItem'>
          <View className='wrapper'>
            <Image className='img1' src={this.props.specialLabel.imgUrl} />
            <Text className='text1'>{this.props.specialLabel.label}</Text>
          </View>
          <Text> > </Text>
        </View>
        {this.props.labelList.map((item, index) =>
          <View className='normalItem'>
            <View className='wrapper'>
              <Image className='img2' src={item.imgUrl} />
              <Text className='text2'>{item.label}</Text>
            </View>
            <Text> > </Text>
          </View>
        )}
      </View>
    )
  }

}
