import Taro, { Component } from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import './index.scss'

export default class BottomBar extends Component {

  // onChange = e => {
  //   this.props.setPickerValue(e.detail.value);
  // };
  showModal (){
    Taro.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000,
      success: function() {
        Taro.switchTab({
          url: '/pages/index/index',
        })
      }
    })
  }

  render () {
    return (
      <View className='bottomWrapper'>
        <View className='draftWrapper'>
          <View className='iconWrapper'>
            <Image className='img' src='../../../../assets/images/u927.svg' />
          </View>
          <Text>草稿</Text>
        </View>
        <View className='submitWrapper' onClick={this.showModal}>
          <Text>发布</Text>
        </View>
      </View>
    )
  }

}
