import Taro, { Component } from '@tarojs/taro'
import {Image, Picker, ScrollView, Text, Textarea, View} from '@tarojs/components'
import './index.scss'

export default class Passage extends Component {

  // onChange = e => {
  //   this.props.setPickerValue(e.detail.value);
  // };
  getLocation () {
    const { getLocationListAction, locationList } = this.props;
    Taro.chooseLocation({
        success: function (res) { // 点击确定后成功回调返回的信息
          console.log(res);
          getLocationListAction(locationList,res.address+res.name)
        }
      }
    )
  }

  getImage () {
    const { showImageAction } = this.props;
    Taro.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res);
        const tempFilePaths = res.tempFilePaths;
        showImageAction(tempFilePaths);
      }
    })
  }

  onChange (e) {
    console.log(e);
    this.props.getLabelListAction(this.props.selectedValue, e.detail.value);
  };

  render () {
    return (
      <View className='passageWrapper'>

        <View className='imgWrapper'>
          {this.props.imageList.map((item, index) =>
            <View className='imgBlock'>
              <Image className='img' src={item} />
            </View>
          )}
          <View className='imgBlock' onClick={this.getImage}>
            <Image className='img' src={this.props.defaultImage} />
          </View>
        </View>

        <View className='passage'>
          <Textarea style={"height: 130px;"} value='添加正文~' />
        </View>

        <View className='labelWrapper'>
          <View className='labelBlock'>
            <View className='title'>
              <Image className='img' src='../../../../assets/images/u871.svg' />
              <Text>标签</Text>
            </View>
            <ScrollView scrollX style={"height: 20px;"}>
              <View className='label'>
                {this.props.selectedValue.map((item, index) =>
                  <View className='labelItem'>
                    <Text>{item}</Text>
                  </View>
                )}
                <View className='labelItem'>
                  <Text>美式咖啡</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Picker mode='selector' range={this.props.pickerValue} onChange={this.onChange} value={0}>
            <View>
             <Image className='img1' src='../../../../assets/images/u873.svg' />
            </View>
          </Picker>
        </View>

        <View className='labelWrapper'>
          <View className='labelBlock'>
            <View className='title'>
              <Image className='img' src='../../../../assets/images/u898.svg' />
              <Text>定位</Text>
            </View>
            <ScrollView scrollX style={"height: 20px;"}>
              <View className='label'>
                {this.props.locationList.map((item, index) =>
                  <View className='labelItem'>
                    <Text>{item}</Text>
                  </View>
                )}
                <View className='labelItem'>
                  <Text>{this.props.defaultLocation}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View>
            <Image className='img1' onClick={this.getLocation} src='../../../../assets/images/u873.svg' />
          </View>
        </View>
      </View>
    )
  }

}
