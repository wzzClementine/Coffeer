import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image, Input, RichText} from '@tarojs/components'
import './index.scss'

export default class Party extends Component {

  getDetail (aid) {
    this.props.getActivityDetailFromMysqlAction(aid);
  }

  showModal (){
    Taro.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    }).then(
      this.props.changePartyStatusAction()
    )
  }

  render () {
    return (
        <View className='partyWrapper'>
          {this.props.activities.map((item, index) =>
            <View className='partyBanner'>
              <View className='contentWrapper'>
                <View className='titleWrapper'>
                  <View><Image className='img' src='../../../../assets/images/u929.svg' /></View>
                  <View><Text>{item.title} | {item.name}</Text></View>
                </View>
                <View className='content'>
                  <RichText className='con' nodes={item.description} />
                </View>
                <View className='detailWrapper'>
                  <Image className='img' src='../../../../assets/images/u922.svg' />
                  <View><Text className='amount'>已报名:{item.amount}人</Text></View>
                  <View><Text className='time'>时间：{item.time}</Text></View>
                </View>
              </View>
              <View className='coverWrapper'>
                <Image className='cover' src={item.cover} />
                {this.props.partyStatus ?
                  <View className='btnWrapper2' onClick={this.showModal}>
                    <Text className='btn'>已报名</Text>
                  </View> : <View className='btnWrapper' onClick={this.showModal}>
                    <Text className='btn'>报名加入</Text>
                  </View>
                }
              </View>
              <View className='iconWrapper' onClick={() => this.getDetail(item.aid)}>
                <Image className='icon' src='../../../../assets/images/u932.svg' />
              </View>
            </View>
          )}

        </View>

    )
  }

}
