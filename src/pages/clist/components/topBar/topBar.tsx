import Taro, { Component } from '@tarojs/taro'
import {View, Image, Picker} from '@tarojs/components'
import './index.scss'

export default class TopBar extends Component {

  onChange = e => {
    this.props.setPickerValue(e.detail.value);
  };

  render () {
    return (
      <View className='topBarWrapper'>
        <Picker mode='selector' range={this.props.selectedList} onChange={this.onChange} value={0}>
          <View className='picker'>
            <Image className='img' src='../../../../assets/images/3line.png' />
            {this.props.defaultSelected}
          </View>
        </Picker>
        {/*<Image className='img' src='../../../../assets/images/u58.png' />*/}
      </View>
    )
  }

}
